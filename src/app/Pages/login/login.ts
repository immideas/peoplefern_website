import { Component, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [Breadcrumb, CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  @ViewChild('passwordInput', { static: false }) passwordInputRef!: ElementRef;
  @ViewChild('passwordToggle', { static: false }) passwordToggleRef!: ElementRef;

  // Form properties
  loginForm = {
    name: '',
    password: '',
    remember: false
  };

  // Loading state
  isLoading = false;
  passwordVisible: boolean = false;

  tags2 = [
    { label: 'Project management', textColor: 'text-white', bgClass: 'gradient-bg-six' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-paste' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
    { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-yellow' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-orange' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
    { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-orange' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'gradient-bg-six' },
    { label: 'Project management', textColor: 'text-heading', bgClass: 'bg-paste' },
    { label: 'Technology', textColor: 'text-heading', bgClass: 'bg-pink' }
  ];

  constructor(
    private animationService: AnimationService,
    private toastService: ToastService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // Handle login form submission
  onLoginSubmit(event: Event) {
    event.preventDefault();

    // Basic validation
    if (!this.loginForm.name || !this.loginForm.password) {
      this.toastService.error(
        'Validation Error',
        'Please fill in all required fields',
        'ph-bold ph-warning-circle'
      );
      return;
    }

    if (this.loginForm.password.length < 6) {
      this.toastService.error(
        'Password Error',
        'Password must be at least 6 characters long',
        'ph-bold ph-lock'
      );
      return;
    }

    // Simulate login process
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;

      // Simulate successful login
      this.toastService.success(
        'Login Successful',
        `Welcome back, ${this.loginForm.name}!`,
        'ph-bold ph-user-check'
      );

      // Clear form
      this.loginForm = {
        name: '',
        password: '',
        remember: false
      };

      // Redirect to dashboard or home page
      setTimeout(() => {
        this.router.navigate(['/']); // or wherever you want to redirect
      }, 2000);

    }, 1500);
  }

  // Handle forgot password
  onForgotPassword() {
    this.toastService.info(
      'Forgot Password',
      'Password reset instructions have been sent to your email',
      'ph-bold ph-envelope'
    );
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    if (!isPlatformBrowser(this.platformId)) return;

    const input = this.passwordInputRef?.nativeElement;
    const toggle = this.passwordToggleRef?.nativeElement;

    if (!input || !toggle) return;

    this.passwordVisible = !this.passwordVisible;

    if (this.passwordVisible) {
      this.renderer.setAttribute(input, 'type', 'text');
      this.renderer.removeClass(toggle, 'ph-eye-slash');
      this.renderer.addClass(toggle, 'ph-eye');
    } else {
      this.renderer.setAttribute(input, 'type', 'password');
      this.renderer.removeClass(toggle, 'ph-eye');
      this.renderer.addClass(toggle, 'ph-eye-slash');
    }
  }
}
