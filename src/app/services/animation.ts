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
  providedIn: 'root'
})
export class AnimationService {
  private renderer: Renderer2;

  constructor(
    private router: Router,
    private rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.initAnimations();
          if (typeof window.initMainJS === 'function') window.initMainJS();
          if (typeof window.initCustomGSAP === 'function') window.initCustomGSAP();
          this.renderer.setStyle(document.body, 'overflow', '');
        }, 100);
      }
    });
  }

  initAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof gsap !== 'undefined' && ScrollTrigger && ScrollSmoother) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const smoothContent = document.querySelector('#smooth-content');
      if (smoothContent) {
        ScrollSmoother.create({
          content: '#smooth-content',
          smooth: 1.5
        });
      }
    }

    const animations: { [key: string]: any } = {
      'animate__bounce': {
        from: { y: -30 },
        to: { y: 0, ease: "bounce.out", duration: 1.2, repeat: 2, yoyo: true }
      },
      'animate__wobble__two': {
        from: { rotation: -10 },
        to: { rotation: 10, ease: "power1.inOut", duration: 1.5, repeat: -1, yoyo: true }
      },
      'animate__swing': {
        from: { rotation: -15 },
        to: { rotation: 15, ease: "power1.inOut", duration: 1.2, repeat: -1, yoyo: true }
      }
    };

    Object.keys(animations).forEach(className => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((el: any) => {
        if (el && typeof gsap !== 'undefined') {
          gsap.fromTo(el, animations[className].from, animations[className].to);
        }
      });
    });
  }
}
