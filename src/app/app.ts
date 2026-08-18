import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Loader } from './layouts/loader/loader';
import { LoaderService } from './services/loader.service';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, Loader],
  standalone: true
})
export class App implements AfterViewInit, OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private loaderService: LoaderService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let currentRoute = this.route.root;
          while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
          }
          return currentRoute.snapshot.data['pageClass'] || '';
        })
      )
      .subscribe((pageClass: string) => {
        if (!isPlatformBrowser(this.platformId)) return;

        // Clear old classes
        this.renderer.setAttribute(document.documentElement, 'class', '');

        // Add each class individually
        if (pageClass) {
          pageClass.split(' ').forEach((cls: string) => {
            if (cls.trim()) {
              this.renderer.addClass(document.documentElement, cls.trim());
            }
          });
        }
      });
      if (isPlatformBrowser(this.platformId)) {
        AOS.init({
          duration: 1000,
          once: false, // Allow animations to repeat on scroll
          easing: 'ease-in-out',
          offset: 100,
          delay: 0,
          anchorPlacement: 'top-bottom'
        });
      }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof (window as any).CursorInitFunction === 'function') {
      (window as any).CursorInitFunction();
    }

    // Call initMainJS on initial load
    if (typeof window['initMainJS'] === 'function') {
      window['initMainJS']();
    }

    // Refresh AOS after initial load
    setTimeout(() => {
      AOS.refresh();
    }, 200);

    // Call initMainJS on every route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          if (typeof window['initMainJS'] === 'function') {
            window['initMainJS']();
          }

          // Refresh AOS after route change
          setTimeout(() => {
            AOS.refresh();
          }, 100);
        }

        // Hide loader after navigation is complete
        this.loaderService.hide();
      });

    // Prevent page refreshes for specific navigation patterns
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.listen('document', 'click', (event: Event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');

        if (link) {
          const href = link.getAttribute('href');
          const routerLink = link.getAttribute('ng-reflect-router-link');

          // Only prevent navigation for problematic href patterns
          if (href === '#' || href === 'javascript:void(0)') {
            event.preventDefault();
            return;
          }

          // Allow routerLink navigation to work normally
          if (routerLink) {
            return;
          }

          // Allow external links to work normally
          if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
            return;
          }
        }
      });
    }
  }
}
