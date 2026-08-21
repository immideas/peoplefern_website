import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';

import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.scss',
})
export class NavMenu implements OnInit, OnDestroy {
  @Input() menuClass: string = '';

  @Output() mobileMenuClose = new EventEmitter<void>();

  // State management for submenus
  activeSubmenu: string | null = null;
  isMobile: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.checkScreenSize();
    this.setupRouterSubscription();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (!isPlatformBrowser(this.platformId)) {
      this.isMobile = false;
      return;
    }

    this.isMobile = window.innerWidth <= 991;

    if (!this.isMobile) {
      this.activeSubmenu = null;
    }
  }

  private setupRouterSubscription() {
    // Listen to route changes to close mobile menu
    this.router.events.subscribe(() => {
      if (this.isMobile) {
        this.closeMobileMenu();
      }
    });
  }

  // Angular way to handle submenu toggle
  toggleSubmenu(event: Event, submenuId: string) {
    if (this.isMobile) {
      // Mobile: Click to toggle
      event.preventDefault();
      event.stopPropagation();

      if (this.activeSubmenu === submenuId) {
        this.activeSubmenu = null;
      } else {
        this.activeSubmenu = submenuId;
      }
    } else {
      // Desktop: Prevent default link behavior but don't toggle
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // Desktop hover functionality
  onSubmenuMouseEnter(submenuId: string) {
    if (!this.isMobile) {
      this.activeSubmenu = submenuId;
    }
  }

  onSubmenuMouseLeave() {
    if (!this.isMobile) {
      // Add a small delay to prevent flickering when moving between menu and submenu
      setTimeout(() => {
        this.activeSubmenu = null;
      }, 100);
    }
  }

  // Check if submenu is active
  isSubmenuActive(submenuId: string): boolean {
    return this.activeSubmenu === submenuId;
  }

  // Handle navigation link click
  onNavLinkClick() {
    if (this.isMobile) {
      this.closeMobileMenu();
    }
  }

  private closeMobileMenu() {
    this.mobileMenuClose.emit();
  }

  // Check if Features section is active
  isFeaturesActive(): boolean {
    const featuresRoutes = ['/features', '/feature-details'];

    const currentPath = this.router.url;

    return featuresRoutes.some((route) => currentPath === route);
  }

  // Check if Pricing section is active
  isPricingActive(): boolean {
    const pricingRoutes = ['/pricing', '/pricing-plan'];

    const currentPath = this.router.url;

    return pricingRoutes.some((route) => currentPath === route);
  }

  // Check if Resources section is active
  isResourcesActive(): boolean {
    const resourcesRoutes = ['/case-studies', '/blog', '/blog-details', '/help-center', '/faq'];

    const currentPath = this.router.url;

    return resourcesRoutes.some((route) => currentPath === route);
  }

  // Check if Security is active
  isSecurityActive(): boolean {
    const securityRoutes = ['/security'];

    const currentPath = this.router.url;

    return securityRoutes.some((route) => currentPath === route);
  }

  // Check if About Us is active
  isAboutActive(): boolean {
    const aboutRoutes = ['/about'];

    const currentPath = this.router.url;

    return aboutRoutes.some((route) => currentPath === route);
  }

  // Check if Contact is active
  isContactActive(): boolean {
    const contactRoutes = ['/contact'];

    const currentPath = this.router.url;

    return contactRoutes.some((route) => currentPath === route);
  }

  // Check if Home is active
  isHomeActive(): boolean {
    const homeRoutes = ['/', '/index', '/index-2', '/index-3', '/index-4', '/index-5', '/index-6'];

    const currentPath = this.router.url;

    return homeRoutes.some((route) => currentPath === route);
  }
}
