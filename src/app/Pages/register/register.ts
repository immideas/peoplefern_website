import { Component, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { RouterLink, Router } from '@angular/router';
import { AnimationService } from '../../services/animation';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [Breadcrumb, RouterLink, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  @ViewChild('passwordInput', { static: false }) passwordInputRef!: ElementRef;
  @ViewChild('passwordToggle', { static: false }) passwordToggleRef!: ElementRef;
  @ViewChild('confirmPasswordInput', { static: false }) confirmPasswordInputRef!: ElementRef;
  @ViewChild('confirmPasswordToggle', { static: false }) confirmPasswordToggleRef!: ElementRef;

  // Form properties
  registerForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  // Loading state
  isLoading = false;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(
    private animationService: AnimationService,
    private toastService: ToastService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // Handle register form submission
  onRegisterSubmit(event: Event) {
    event.preventDefault();

    // Basic validation
    if (!this.registerForm.name || !this.registerForm.username || !this.registerForm.email || !this.registerForm.password || !this.registerForm.confirmPassword) {
      this.toastService.error(
        'Validation Error',
        'Please fill in all required fields',
        'ph-bold ph-warning-circle'
      );
      return;
    }

    if (this.registerForm.password.length < 6) {
      this.toastService.error(
        'Password Error',
        'Password must be at least 6 characters long',
        'ph-bold ph-lock'
      );
      return;
    }

    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      this.toastService.error(
        'Password Mismatch',
        'Password and confirm password do not match',
        'ph-bold ph-warning-circle'
      );
      return;
    }

    if (!this.registerForm.agreeToTerms) {
      this.toastService.error(
        'Terms Agreement',
        'Please agree to the Terms of Service to continue',
        'ph-bold ph-file-text'
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.registerForm.email)) {
      this.toastService.error(
        'Invalid Email',
        'Please enter a valid email address',
        'ph-bold ph-envelope'
      );
      return;
    }

    // Simulate registration process
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;

      // Simulate successful registration
      this.toastService.success(
        'Registration Successful',
        `Welcome ${this.registerForm.name}! Your account has been created successfully.`,
        'ph-bold ph-user-plus'
      );

      // Clear form
      this.registerForm = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      };

      // Redirect to login page
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    }, 1500);
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

  // Toggle confirm password visibility
  toggleConfirmPasswordVisibility() {
    if (!isPlatformBrowser(this.platformId)) return;

    const input = this.confirmPasswordInputRef?.nativeElement;
    const toggle = this.confirmPasswordToggleRef?.nativeElement;

    if (!input || !toggle) return;

    this.confirmPasswordVisible = !this.confirmPasswordVisible;

    if (this.confirmPasswordVisible) {
      this.renderer.setAttribute(input, 'type', 'text');
      this.renderer.removeClass(toggle, 'ph-eye-slash');
      this.renderer.addClass(toggle, 'ph-eye');
    } else {
      this.renderer.setAttribute(input, 'type', 'password');
      this.renderer.removeClass(toggle, 'ph-eye');
      this.renderer.addClass(toggle, 'ph-eye-slash');
    }
  }

  // Handle terms of service click
  onTermsClick() {
    this.toastService.info(
      'Terms of Service',
      'Please review our Terms of Service before proceeding',
      'ph-bold ph-file-text'
    );
  }
}
