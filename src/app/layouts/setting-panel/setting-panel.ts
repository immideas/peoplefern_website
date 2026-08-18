import { Component, ElementRef, Inject, ViewChild, PLATFORM_ID, HostListener, AfterViewInit, Renderer2 } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { ToastService } from '../../services/toast.service';
import { ToastContainerComponent } from '../../components/toast-container/toast-container.component';

@Component({
  selector: 'app-setting-panel',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, MobileMenu, ToastContainerComponent],
  standalone: true,
  templateUrl: './setting-panel.html',
  styleUrl: './setting-panel.scss'
})
export class SettingPanel implements  AfterViewInit {
  @ViewChild('progressPath') progressPathRef!: ElementRef<SVGPathElement>;
  isActiveProgress: boolean = false;
  private pathLength!: number;
  private renderer!: Renderer2;

  activeIndex: any | null = null;
  windowWidth: number = 0;

  setupPath() {
    if (!this.progressPathRef?.nativeElement || !this.isBrowser) {
      return;
    }
    const path = this.progressPathRef.nativeElement;
    this.pathLength = path.getTotalLength();
    this.renderer.setStyle(path, 'transition', 'none');
    this.renderer.setStyle(path, 'webkitTransition', 'none');
    this.renderer.setStyle(path, 'strokeDasharray', `${this.pathLength} ${this.pathLength}`);
    this.renderer.setStyle(path, 'strokeDashoffset', this.pathLength.toString());
    path.getBoundingClientRect(); // force reflow
    this.renderer.setStyle(path, 'transition', 'stroke-dashoffset 10ms linear');
    this.renderer.setStyle(path, 'webkitTransition', 'stroke-dashoffset 10ms linear');
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.isBrowser) {
      this.updateProgress();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isActiveProgress = scrollTop > 50;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this.isBrowser) {
      this.windowWidth = window.innerWidth;
      // Re-setup the path when window is resized
      if (this.progressPathRef?.nativeElement) {
        this.setupPath();
        this.updateProgress();
      }
    }
  }

  updateProgress() {
    if (!this.progressPathRef?.nativeElement || this.pathLength === undefined || !this.isBrowser) {
      return;
    }
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = this.pathLength - (scroll * this.pathLength / height);
    this.renderer.setStyle(this.progressPathRef.nativeElement, 'strokeDashoffset', progress.toString());
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    if (!this.isBrowser) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private toastService: ToastService,
    renderer: Renderer2
  ) {
    this.renderer = renderer;
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.windowWidth = window.innerWidth;
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.progressPathRef?.nativeElement) {
      this.setupPath();
      this.updateProgress();
    }
  }

  cursorType: 'animate' | 'default' = 'animate';
  direction: 'ltr' | 'rtl' = 'ltr';
  isSettingsPanelOpen: boolean = false;
  isSettingsButtonActive: boolean = false;

  toggleSettingsPanel() {
    this.isSettingsPanelOpen = !this.isSettingsPanelOpen;
    this.isSettingsButtonActive = !this.isSettingsButtonActive;
  }

  onSettingsButtonClick(event: Event) {
    const target = event.target as HTMLElement;
    const button = target.closest('.settings-button');
    if (!button) return;

    this.toggleSettingsPanel();
  }

  onSettingsPanelButtonClick(event: Event) {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const button = target.closest('.settings-panel__buttons .settings-panel__button') as HTMLElement;
    if (!button) return;

    // Remove active class from siblings
    const siblings = Array.from(button.parentElement!.children).filter(
      (el) => el !== button
    ) as HTMLElement[];
    siblings.forEach((el) => this.renderer.removeClass(el, 'active'));

    // Add active class to clicked button
    this.renderer.addClass(button, 'active');
  }

  onCursorAnimateClick(event: Event) {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const button = target.closest('.cursor-animate');
    if (!button) return;

    this.cursorType = 'animate';
    this.renderer.removeClass(document.body, 'remove-animate-cursor');
    this.toastService.success('Cursor Updated', 'Animated cursor is now active', 'ph-bold ph-cursor');
  }

  onCursorDefaultClick(event: Event) {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const button = target.closest('.cursor-default');
    if (!button) return;

    this.cursorType = 'default';
    this.renderer.addClass(document.body, 'remove-animate-cursor');
    this.toastService.success('Cursor Updated', 'Default cursor is now active', 'ph-bold ph-cursor');
  }

  onDirectionLtrClick(event: Event) {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const button = target.closest('.direction-ltr');
    if (!button) return;

    this.direction = 'ltr';
    this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
    this.toastService.success('Direction Updated', 'Left-to-right layout is now active', 'ph-bold ph-arrow-right');
  }

  onDirectionRtlClick(event: Event) {
    if (!this.isBrowser) return;

    const target = event.target as HTMLElement;
    const button = target.closest('.direction-rtl');
    if (!button) return;

    this.direction = 'rtl';
    this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
    this.toastService.success('Direction Updated', 'Right-to-left layout is now active', 'ph-bold ph-arrow-left');
  }


}
