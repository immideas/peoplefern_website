import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader implements OnInit, OnDestroy {
  isLoading = true;
  showLoader = true;
  private subscription: Subscription = new Subscription();

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    // Subscribe to loader state changes
    this.subscription.add(
      this.loaderService.isLoading$.subscribe(loading => {
        if (!loading && this.isLoading) {
          // Start fade out transition
          this.isLoading = false;
          // Hide loader after transition completes
          setTimeout(() => {
            this.showLoader = false;
          }, 500); // Match CSS transition duration
        } else if (loading) {
          this.isLoading = true;
          this.showLoader = true;
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscription
    this.subscription.unsubscribe();
  }
}
