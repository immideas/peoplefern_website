import { Injectable } from '@angular/core';

declare function gtag(...args: any[]): void;

@Injectable({
  providedIn: 'root',
})
export class Analytics {

  /**
   * Track Angular route/page views in GA4
   */
  trackPageView(url: string): void {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }

  /**
   * Track custom events in GA4
   */
  trackEvent(
    eventName: string,
    eventParams?: Record<string, any>
  ): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams || {});
    }
  }
}