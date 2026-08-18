import { Component, Input, OnInit, OnDestroy, HostListener, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MegaMenu } from '../mega-menu/mega-menu';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, MegaMenu, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.scss'
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
    @Inject(PLATFORM_ID) private platformId: Object
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

  // Check if any of the submenu routes are active
  isPagesActive(): boolean {
    const pagesRoutes = ['/pricing-plan', '/about', '/app-intigration', '/intigration-details', '/policy-privacy', '/faq', '/project-details', '/service-details'];
    const currentPath = this.router.url;
    return pagesRoutes.some(route => currentPath === route);
  }

  isShopActive(): boolean {
    const shopRoutes = ['/shop', '/shop-details', '/cart', '/checkout'];
    const currentPath = this.router.url;
    return shopRoutes.some(route => currentPath === route);
  }

  isBlogActive(): boolean {
    const blogRoutes = ['/blog', '/blog-details'];
    const currentPath = this.router.url;
    return blogRoutes.some(route => currentPath === route);
  }

  isHomeActive(): boolean {
    const homeRoutes = ['/', '/index', '/index-2', '/index-3', '/index-4', '/index-5', '/index-6'];
    const currentPath = this.router.url;
    return homeRoutes.some(route => currentPath === route);
  }
}
