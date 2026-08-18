import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-message {{ toast.messageType }}"
         [class.active]="isActive"
         (mouseenter)="onMouseEnter()"
         (mouseleave)="onMouseLeave()">
      <div class="toast-message__content">
        <span class="toast-message__icon">
          <i [class]="toast.messageIcon"></i>
        </span>
        <div class="flex-grow-1">
          <div class="d-flex align-items-start justify-content-between mb-1">
            <h6 class="toast-message__title">{{ toast.messageTitle }}</h6>
            <button type="button" class="toast-message__close" (click)="onClose()">
              <i class="ph-bold ph-x"></i>
            </button>
          </div>
          <span class="toast-message__text">{{ toast.messageText }}</span>
        </div>
      </div>
      <div class="progress__bar" [style.width.%]="progressWidth"></div>
    </div>
  `,
  styles: [`
    .toast-message {
      position: relative;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      margin-bottom: 10px;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease;
      max-width: 400px;
      min-width: 300px;
    }

    .toast-message.active {
      transform: translateX(0);
      opacity: 1;
    }

    .toast-message__content {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      gap: 12px;
    }

    .toast-message__icon {
      font-size: 20px;
      margin-top: 2px;
    }

    .toast-message.success .toast-message__icon {
      color: #10b981;
    }

    .toast-message.error .toast-message__icon {
      color: #ef4444;
    }

    .toast-message.warning .toast-message__icon {
      color: #f59e0b;
    }

    .toast-message.info .toast-message__icon {
      color: #3b82f6;
    }

    .toast-message__title {
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      color: #1f2937;
    }

    .toast-message__text {
      font-size: 13px;
      color: #6b7280;
      margin: 0;
    }

    .toast-message__close {
      background: none;
      border: none;
      color: #9ca3af;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: color 0.2s ease;
    }

    .toast-message__close:hover {
      color: #6b7280;
    }

    .progress__bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: #e5e7eb;
      border-radius: 0 0 8px 8px;
      transition: width linear;
    }

    .toast-message.success .progress__bar {
      background: #10b981;
    }

    .toast-message.error .progress__bar {
      background: #ef4444;
    }

    .toast-message.warning .progress__bar {
      background: #f59e0b;
    }

    .toast-message.info .progress__bar {
      background: #3b82f6;
    }
  `]
})
export class ToastComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() toast!: ToastMessage;
  @ViewChild('toastElement', { static: false }) toastElement?: ElementRef;

  isActive = false;
  progressWidth = 100;
  private progressInterval?: number;
  private remainingTime = 0;
  private startTime = 0;
  private isPaused = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Trigger animation after a short delay
    setTimeout(() => {
      this.isActive = true;
      this.startProgress();
    }, 50);
  }

  ngAfterViewInit() {
    this.startProgress();
  }

  ngOnDestroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  private startProgress() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.remainingTime = this.toast.duration || 3500;
    this.startTime = Date.now();
    this.isPaused = false;

    this.progressInterval = window.setInterval(() => {
      if (!this.isPaused) {
        const elapsed = Date.now() - this.startTime;
        const progress = (elapsed / this.remainingTime) * 100;
        this.progressWidth = Math.max(0, 100 - progress);

        if (progress >= 100) {
          this.hideToast();
        }
      }
    }, 50);
  }

  onMouseEnter() {
    this.isPaused = true;
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  onMouseLeave() {
    this.isPaused = false;
    this.startTime = Date.now();
    this.startProgress();
  }

  onClose() {
    this.hideToast();
  }

  private hideToast() {
    this.isActive = false;
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    setTimeout(() => {
      // This will be handled by the parent component
    }, 500);
  }
}
