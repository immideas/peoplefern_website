import { Component, Input, OnInit, OnDestroy, HostListener, ElementRef, Renderer2, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuTwo } from '../nav-menu-two/nav-menu-two';
import { NavMenuThree } from '../nav-menu-three/nav-menu-three';
import { NavMenu } from '../nav-menu/nav-menu';
import { RouterLink } from '@angular/router';
import { MobileMenuAnimationService } from '../../services/mobile-menu-animation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-two',
  imports: [NavMenuTwo, CommonModule, NavMenuThree, NavMenu, RouterLink],
  standalone: true,
  templateUrl: './header-two.html',
  styleUrl: './header-two.scss'
})
export class HeaderTwo implements OnInit, OnDestroy {
  @Input() headerClass: string = '';
  @Input() logoText: string = '';
  @Input() btnClass: string = '';
  @Input() navMenu: any;

  @ViewChild('headerElement', { static: false }) headerElementRef!: ElementRef;
  @ViewChild('mobileMenu', { static: false }) mobileMenuRef!: ElementRef;
  @ViewChild('overlay', { static: false }) overlayRef!: ElementRef;

  // State management for mobile menu
  isMobileMenuOpen: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private mobileMenuAnimationService: MobileMenuAnimationService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Initialize header functionality
  }

  ngOnDestroy() {
    // Cleanup - ensure body scroll is restored
    this.closeMobileMenu();
    this.mobileMenuAnimationService.destroy();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const header = this.headerElementRef?.nativeElement || this.elementRef.nativeElement.querySelector('.header');
    if (!header) return;

    if (window.scrollY >= 100) {
      this.renderer.addClass(header, 'fixed-header');
    } else {
      this.renderer.removeClass(header, 'fixed-header');
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

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  private openMobileMenu() {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const overlay = this.overlayRef?.nativeElement;

    if (mobileMenu && overlay) {
      // Add show classes immediately for CSS transitions
      this.renderer.addClass(mobileMenu, 'show');
      this.renderer.addClass(overlay, 'show');
      this.renderer.addClass(document.body, 'mobile-menu-open');
      this.isMobileMenuOpen = true;

      // Use GSAP animation if available (for enhanced animations)
      this.mobileMenuAnimationService.playMobileMenuAnimation();
    }
  }

  private closeMobileMenu() {
    if (!isPlatformBrowser(this.platformId)) return;

    const mobileMenu = this.mobileMenuRef?.nativeElement;
    const overlay = this.overlayRef?.nativeElement;

    if (mobileMenu && overlay) {
      // Remove show classes immediately for CSS transitions
      this.renderer.removeClass(mobileMenu, 'show');
      this.renderer.removeClass(overlay, 'show');
      this.renderer.removeClass(document.body, 'mobile-menu-open');
      this.isMobileMenuOpen = false;

      // Use GSAP animation if available (for enhanced animations)
      this.mobileMenuAnimationService.reverseMobileMenuAnimation();
    }
  }
}
