import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuAnimationService {

  private gsapTimeline: any = null;
  private matchMedia: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Initialize GSAP if available
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      this.matchMedia = gsap.matchMedia();
      this.gsapTimeline = gsap.timeline({ paused: true });
      this.setupAnimations();
    }
  }

  private setupAnimations() {
    if (!this.matchMedia || !this.gsapTimeline) return;

    this.matchMedia.add("(max-width: 991px)", () => {
      // Animation for side overlay
      this.gsapTimeline.to('.mobile-menu-overlay', {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: "power3.out"
      });

      // Animation for mobile menu slide in
      this.gsapTimeline.to('.mobile-menu', {
        x: 0,
        duration: 0.4,
        ease: "power3.out"
      }, 0);

      // Animation for menu items with better stagger
      this.gsapTimeline.from('.nav-menu__item', {
        opacity: 0,
        duration: 0.3,
        y: -30,
        stagger: 0.08,
        ease: "power3.out"
      }, 0.15);

      // Animation for close button
      this.gsapTimeline.from('.close-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "back.out(1.7)"
      }, 0.2);

      // Animation for submenu items
      this.gsapTimeline.from('.nav-submenu__item', {
        opacity: 0,
        duration: 0.2,
        x: -20,
        stagger: 0.05,
        ease: "power2.out"
      }, 0.3);
    });
  }

  playMobileMenuAnimation() {
    if (isPlatformBrowser(this.platformId) && this.gsapTimeline) {
      this.gsapTimeline.play();
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  reverseMobileMenuAnimation() {
    if (isPlatformBrowser(this.platformId) && this.gsapTimeline) {
      this.gsapTimeline.reverse();
      if (document.body) {
        document.body.style.overflow = '';
      }
    }
  }

  destroy() {
    if (this.matchMedia) {
      this.matchMedia.kill();
    }
  }
}
