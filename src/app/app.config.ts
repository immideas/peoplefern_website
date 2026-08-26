import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideHttpClient } from '@angular/common/http';

import { provideRouter, Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { Analytics } from './services/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true,
    }),

    provideRouter(routes),

    provideHttpClient(),

    {
      provide: 'GA4_ROUTER_TRACKING',

      useFactory: (router: Router, analytics: Analytics) => {
        router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((event: NavigationEnd) => {
            analytics.trackPageView(event.urlAfterRedirects);
          });
      },

      deps: [Router, Analytics],
    },
  ],
};
