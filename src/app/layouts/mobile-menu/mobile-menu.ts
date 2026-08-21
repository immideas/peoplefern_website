import {
  Component,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { NavMenu } from '../nav-menu/nav-menu';
import { RouterLink } from '@angular/router';
import { MobileMenuAnimationService } from '../../services/mobile-menu-animation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavMenu, RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu implements OnDestroy {
  @ViewChild('mobileMenu', { static: false })
  mobileMenuRef!: ElementRef;

  @ViewChild('overlay', { static: false })
  overlayRef!: ElementRef;

  constructor(
    private mobileMenuAnimationService: MobileMenuAnimationService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
  }

  // =========================================================
  // OPEN MOBILE MENU
  // =========================================================

  openMobileMenu(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const overlay = this.overlayRef?.nativeElement;

    if (!mobileMenu || !overlay) {
      return;
    }

    // Add show classes
    this.renderer.addClass(mobileMenu, 'show');

    this.renderer.addClass(overlay, 'show');

    // Prevent body scrolling
    this.renderer.addClass(document.body, 'mobile-menu-open');

    // Start GSAP animation
    this.mobileMenuAnimationService.playMobileMenuAnimation();
  }

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  closeMobileMenu(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const overlay = this.overlayRef?.nativeElement;

    if (!mobileMenu || !overlay) {
      return;
    }

    this.renderer.removeClass(mobileMenu, 'show');

    this.renderer.removeClass(overlay, 'show');

    this.renderer.removeClass(document.body, 'mobile-menu-open');

    // Reverse GSAP animation
    this.mobileMenuAnimationService.reverseMobileMenuAnimation();
  }

  // =========================================================
  // HAMBURGER CLICK
  // =========================================================

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const target = event.target as HTMLElement;

    const mobileMenu = this.mobileMenuRef?.nativeElement;

    const toggleButton = target.closest('.toggle-mobileMenu');

    // -----------------------------------------
    // HAMBURGER CLICK
    // -----------------------------------------

    if (toggleButton) {
      event.stopPropagation();

      if (mobileMenu && mobileMenu.classList.contains('show')) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }

      return;
    }

    // -----------------------------------------
    // MENU NOT OPEN
    // -----------------------------------------

    if (!mobileMenu || !mobileMenu.classList.contains('show')) {
      return;
    }

    // -----------------------------------------
    // CLICK OUTSIDE MENU
    // -----------------------------------------

    if (!mobileMenu.contains(target)) {
      this.closeMobileMenu();
    }
  }

  // =========================================================
  // DESKTOP RESIZE
  // =========================================================

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (window.innerWidth > 991) {
      this.closeMobileMenu();
    }
  }

  // =========================================================
  // ESCAPE KEY
  // =========================================================

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMobileMenu();
  }
}
