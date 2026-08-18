import { Injectable, ComponentRef, ViewContainerRef, createComponent, EnvironmentInjector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  id: string;
  messageType: 'success' | 'error' | 'warning' | 'info';
  messageTitle: string;
  messageText: string;
  messageIcon: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: ToastMessage[] = [];
  private toastSubject = new BehaviorSubject<ToastMessage[]>([]);
  public toasts$ = this.toastSubject.asObservable();

  constructor(private environmentInjector: EnvironmentInjector) {}

  showToast(messageType: 'success' | 'error' | 'warning' | 'info', messageTitle: string, messageText: string, messageIcon: string, duration: number = 3500) {
    const toast: ToastMessage = {
      id: this.generateId(),
      messageType,
      messageTitle,
      messageText,
      messageIcon,
      duration
    };

    this.toasts.push(toast);
    this.toastSubject.next([...this.toasts]);

    // Auto remove after duration
    setTimeout(() => {
      this.removeToast(toast.id);
    }, duration);

    return toast.id;
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.toastSubject.next([...this.toasts]);
  }

  clearAllToasts() {
    this.toasts = [];
    this.toastSubject.next([]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Convenience methods
  success(title: string, text: string, icon: string = 'ph-bold ph-check-circle') {
    return this.showToast('success', title, text, icon);
  }

  error(title: string, text: string, icon: string = 'ph-bold ph-x-circle') {
    return this.showToast('error', title, text, icon);
  }

  warning(title: string, text: string, icon: string = 'ph-bold ph-warning-circle') {
    return this.showToast('warning', title, text, icon);
  }

  info(title: string, text: string, icon: string = 'ph-bold ph-info') {
    return this.showToast('info', title, text, icon);
  }
}
