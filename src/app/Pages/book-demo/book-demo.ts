import { Component, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';

import { AnimationService } from '../../services/animation';

import { ToastService } from '../../services/toast.service';

import { BookDemoService } from '../../services/book-demo';

@Component({
  selector: 'app-book-demo',

  standalone: true,

  imports: [Breadcrumb, CommonModule, RouterLink, FormsModule],

  templateUrl: './book-demo.html',

  styleUrl: './book-demo.css',
})
export class BookDemo implements AfterViewInit {
  // =========================================================
  // DEMO FORM
  // =========================================================

  demoFormData = {
    firstName: '',

    lastName: '',

    email: '',

    phone: '',

    company: '',

    employees: '',

    interest: '',

    message: '',

    consent: false,
  };

  // =========================================================
  // LOADING
  // =========================================================

  isLoading = false;

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService,

    private toastService: ToastService,

    private bookDemoService: BookDemoService,
  ) {}

  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // =========================================================
  // SUBMIT DEMO REQUEST
  // =========================================================

  onDemoSubmit(): void {
    // =======================================================
    // PREVENT MULTIPLE SUBMISSIONS
    // =======================================================

    if (this.isLoading) {
      return;
    }

    // =======================================================
    // REQUIRED FIELDS
    // =======================================================

    if (
      !this.demoFormData.firstName.trim() ||
      !this.demoFormData.lastName.trim() ||
      !this.demoFormData.email.trim() ||
      !this.demoFormData.phone.trim() ||
      !this.demoFormData.company.trim() ||
      !this.demoFormData.employees
    ) {
      this.toastService.error(
        'Required Information',

        'Please complete all required fields.',

        'ph-bold ph-warning-circle',
      );

      return;
    }

    // =======================================================
    // EMAIL VALIDATION
    // =======================================================

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.demoFormData.email.trim())) {
      this.toastService.error(
        'Invalid Email',

        'Please enter a valid work email address.',

        'ph-bold ph-envelope',
      );

      return;
    }

    // =======================================================
    // PHONE VALIDATION
    // =======================================================

    const phoneRegex = /^[+]?[0-9\s()-]{7,20}$/;

    if (!phoneRegex.test(this.demoFormData.phone.trim())) {
      this.toastService.error(
        'Invalid Phone Number',

        'Please enter a valid phone number.',

        'ph-bold ph-phone',
      );

      return;
    }

    // =======================================================
    // CONSENT
    // =======================================================

    if (!this.demoFormData.consent) {
      this.toastService.error(
        'Consent Required',

        'Please confirm that you agree to be contacted.',

        'ph-bold ph-shield-check',
      );

      return;
    }

    // =======================================================
    // PREPARE API PAYLOAD
    // =======================================================

    const payload = {
      first_name: this.demoFormData.firstName.trim(),

      last_name: this.demoFormData.lastName.trim(),

      email: this.demoFormData.email.trim().toLowerCase(),

      phone: this.demoFormData.phone.trim(),

      company: this.demoFormData.company.trim(),

      employees: this.demoFormData.employees,

      interest: this.demoFormData.interest?.trim() || '',

      message: this.demoFormData.message?.trim() || '',

      consent: this.demoFormData.consent,
    };

    // =======================================================
    // START LOADING
    // =======================================================

    this.isLoading = true;

    // =======================================================
    // API CALL
    // =======================================================

    this.bookDemoService.createDemo(payload).subscribe({
      // ===================================================
      // SUCCESS
      // ===================================================

      next: (response: any) => {
        console.log('Book Demo Response:', response);

        this.isLoading = false;

        // =================================================
        // SUCCESS TOAST
        // =================================================

        this.toastService.success(
          'Demo Request Received',

          `Thank you ${this.demoFormData.firstName}! Our team will contact you soon.`,

          'ph-bold ph-check-circle',
        );

        // =================================================
        // RESET FORM
        // =================================================

        this.demoFormData = {
          firstName: '',

          lastName: '',

          email: '',

          phone: '',

          company: '',

          employees: '',

          interest: '',

          message: '',

          consent: false,
        };
      },

      // ===================================================
      // ERROR
      // ===================================================

      error: (error: any) => {
        console.error('Book Demo Error:', error);

        this.isLoading = false;

        this.toastService.error(
          'Submission Failed',

          error?.error?.message ||
            error?.error?.error ||
            'Unable to submit your demo request. Please try again.',

          'ph-bold ph-warning-circle',
        );
      },
    });
  }
}
