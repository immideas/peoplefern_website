import { Injectable, Inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';

declare const AOS: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const ScrollSmoother: any;

declare global {
  interface Window {
    initCustomGSAP?: () => void;
    initMainJS?: () => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private renderer: Renderer2;

  // Added only to keep track of the current ScrollSmoother instance
  private scrollSmoother: any = null;

  constructor(
    private router: Router,
    private rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        // Reset scroll immediately after navigation
        this.resetScrollPosition();

        setTimeout(() => {
          // Remove previous ScrollSmoother instance
          this.destroyScrollSmoother();

          // Existing animation initialization
          this.initAnimations();

          // Existing logic - unchanged
          if (typeof window.initMainJS === 'function') {
            window.initMainJS();
          }

          // Existing logic - unchanged
          if (typeof window.initCustomGSAP === 'function') {
            window.initCustomGSAP();
          }

          // Existing logic - unchanged
          this.renderer.setStyle(document.body, 'overflow', '');

          // Reset again after animations initialize
          this.resetScrollPosition();

          // Refresh ScrollTrigger
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }, 100);
      }
    });
  }

  // =========================================================
  // RESET SCROLL POSITION
  // Added for page navigation
  // =========================================================

  private resetScrollPosition(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  // =========================================================
  // DESTROY PREVIOUS SCROLL SMOOTHER
  // Added to prevent old page scroll position
  // =========================================================

  private destroyScrollSmoother(): void {
    if (this.scrollSmoother && typeof this.scrollSmoother.kill === 'function') {
      this.scrollSmoother.kill();

      this.scrollSmoother = null;
    }
  }

  // =========================================================
  // YOUR EXISTING ANIMATION LOGIC
  // =========================================================

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (typeof gsap !== 'undefined' && ScrollTrigger && ScrollSmoother) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const smoothContent = document.querySelector('#smooth-content');

      if (smoothContent) {
        // Added cleanup before creating a new instance
        this.destroyScrollSmoother();

        // Your existing ScrollSmoother logic
        this.scrollSmoother = ScrollSmoother.create({
          content: '#smooth-content',
          smooth: 1.5,
        });
      }
    }

    // =======================================================
    // YOUR EXISTING ANIMATIONS - NOT CHANGED
    // =======================================================

    const animations: { [key: string]: any } = {
      animate__bounce: {
        from: {
          y: -30,
        },

        to: {
          y: 0,
          ease: 'bounce.out',
          duration: 1.2,
          repeat: 2,
          yoyo: true,
        },
      },

      animate__wobble__two: {
        from: {
          rotation: -10,
        },

        to: {
          rotation: 10,
          ease: 'power1.inOut',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        },
      },

      animate__swing: {
        from: {
          rotation: -15,
        },

        to: {
          rotation: 15,
          ease: 'power1.inOut',
          duration: 1.2,
          repeat: -1,
          yoyo: true,
        },
      },
    };

    Object.keys(animations).forEach((className) => {
      const elements = document.querySelectorAll(`.${className}`);

      elements.forEach((el: any) => {
        if (el && typeof gsap !== 'undefined') {
          gsap.fromTo(el, animations[className].from, animations[className].to);
        }
      });
    });
  }
}
