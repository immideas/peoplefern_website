import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Auto-hide loader after page load
    if (isPlatformBrowser(this.platformId)) {
      this.autoHideLoader();
    } else {
      // On server, hide immediately
      this.hide();
    }
  }

  show() {
    this.isLoadingSubject.next(true);
  }

  hide() {
    this.isLoadingSubject.next(false);
  }

  private autoHideLoader() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Hide loader when page is fully loaded
    if (document.readyState === 'complete') {
      this.hideWithDelay();
    } else {
      window.addEventListener('load', () => {
        this.hideWithDelay();
      });
    }
  }

  private hideWithDelay() {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      this.hide();
    }, 500);
  }
}
