import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Animate counter from start to end value
  animateCounter(
    startValue: number, 
    endValue: number, 
    duration: number, 
    callback: (value: number) => void,
    suffix: string = '',
    prefix: string = ''
  ): void {
    if (!isPlatformBrowser(this.platformId)) {
      callback(endValue);
      return;
    }

    const startTime = performance.now();
    const difference = endValue - startValue;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Slower easing function for more gradual animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (difference * easeOutCubic);
      
      // Format the value based on the suffix
      let formattedValue = this.formatValue(currentValue, suffix);
      callback(parseFloat(formattedValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  // Format value based on suffix
  private formatValue(value: number, suffix: string): string {
    if (suffix.includes('M+') || suffix.includes('m')) {
      return (value / 1000000).toFixed(1);
    } else if (suffix.includes('K+') || suffix.includes('k')) {
      return (value / 1000).toFixed(0);
    } else if (suffix.includes('%')) {
      return value.toFixed(0);
    } else if (suffix.includes('x')) {
      return value.toFixed(0);
    } else {
      return value.toFixed(0);
    }
  }

  // Check if element is in viewport
  isInViewport(element: HTMLElement): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Animate counter when element comes into view
  animateCounterOnScroll(
    element: HTMLElement,
    startValue: number,
    endValue: number,
    duration: number,
    callback: (value: number) => void,
    suffix: string = '',
    prefix: string = ''
  ): void {
    if (!isPlatformBrowser(this.platformId)) {
      callback(endValue);
      return;
    }

    let hasAnimated = false;

    const checkScroll = () => {
      if (!hasAnimated && this.isInViewport(element)) {
        hasAnimated = true;
        this.animateCounter(startValue, endValue, duration, callback, suffix, prefix);
        window.removeEventListener('scroll', checkScroll);
      }
    };

    // Check immediately in case element is already in view
    checkScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
  }

  // Simple counter animation without scroll detection
  animateCounterSimple(
    startValue: number,
    endValue: number,
    duration: number,
    callback: (value: number) => void,
    suffix: string = '',
    prefix: string = ''
  ): void {
    this.animateCounter(startValue, endValue, duration, callback, suffix, prefix);
  }
}
