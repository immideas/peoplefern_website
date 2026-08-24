import { Component, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';

import { AnimationService } from '../../services/animation';

import { ToastService } from '../../services/toast.service';

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
    // -------------------------------------------------------
    // Required fields
    // -------------------------------------------------------

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

    // -------------------------------------------------------
    // Email validation
    // -------------------------------------------------------

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.demoFormData.email)) {
      this.toastService.error(
        'Invalid Email',

        'Please enter a valid work email address.',

        'ph-bold ph-envelope',
      );

      return;
    }

    // -------------------------------------------------------
    // Phone validation
    // -------------------------------------------------------

    const phoneRegex = /^[+]?[0-9\s()-]{7,20}$/;

    if (!phoneRegex.test(this.demoFormData.phone)) {
      this.toastService.error(
        'Invalid Phone Number',

        'Please enter a valid phone number.',

        'ph-bold ph-phone',
      );

      return;
    }

    // -------------------------------------------------------
    // Consent
    // -------------------------------------------------------

    if (!this.demoFormData.consent) {
      this.toastService.error(
        'Consent Required',

        'Please confirm that you agree to be contacted.',

        'ph-bold ph-shield-check',
      );

      return;
    }

    // -------------------------------------------------------
    // Loading
    // -------------------------------------------------------

    this.isLoading = true;

    // -------------------------------------------------------
    // Temporary demo submission
    //
    // Replace this later with your API service.
    // -------------------------------------------------------

    setTimeout(() => {
      this.isLoading = false;

      this.toastService.success(
        'Demo Request Received',

        `Thank you ${this.demoFormData.firstName}! Our team will contact you soon.`,

        'ph-bold ph-check-circle',
      );

      // -----------------------------------------------------
      // Reset form
      // -----------------------------------------------------

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
    }, 1500);
  }
}
