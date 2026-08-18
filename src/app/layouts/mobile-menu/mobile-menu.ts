import { Component, OnDestroy, HostListener, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { NavMenu } from '../nav-menu/nav-menu';
import { RouterLink } from '@angular/router';
import { MobileMenuAnimationService } from '../../services/mobile-menu-animation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavMenu, RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss'
})
export class MobileMenu implements  OnDestroy {
  @ViewChild('mobileMenu', { static: false }) mobileMenuRef!: ElementRef;
  @ViewChild('overlay', { static: false }) overlayRef!: ElementRef;

  constructor(
    private mobileMenuAnimationService: MobileMenuAnimationService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnDestroy() {
    // Cleanup - ensure body scroll is restored
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
  }

  closeMobileMenu() {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const overlay = this.overlayRef?.nativeElement;

    if (mobileMenu && overlay) {
      // Remove show classes immediately for CSS transitions
      this.renderer.removeClass(mobileMenu, 'show');
      this.renderer.removeClass(overlay, 'show');
      this.renderer.removeClass(document.body, 'mobile-menu-open');

      // Use GSAP animation if available (for enhanced animations)
      this.mobileMenuAnimationService.reverseMobileMenuAnimation();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const toggleButton = document.querySelector('.toggle-mobileMenu') as HTMLElement;

    if (mobileMenu && this.renderer.parentNode(mobileMenu) && mobileMenu.classList.contains('show')) {
      const target = event.target as HTMLElement;

      // Close menu if clicking outside of it and not on the toggle button
      if (!mobileMenu.contains(target) && !toggleButton?.contains(target)) {
        this.closeMobileMenu();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    if (!isPlatformBrowser(this.platformId)) return;

    // Close mobile menu on desktop resize
    if (window.innerWidth > 991) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event) {
    // Close mobile menu on escape key
    this.closeMobileMenu();
  }
}
