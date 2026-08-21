import { Component, AfterViewInit } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../services/animation';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    Breadcrumb,
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements AfterViewInit {

  // =========================================================
  // CONTACT FORM
  // =========================================================

  contactForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  };

  isLoading = false;


  // =========================================================
  // PEOPLEVAULT CONTACT INFORMATION
  // =========================================================

  contactCards = [

    {
      type: 'address',
      title: 'Our Office',
      icon: 'assets/images/icons/contact-icon1.svg',

      contents: [
        'PeopleVault HRMS',
        'India'
      ]
    },

    {
      type: 'phone',
      title: 'Talk to Our Team',
      icon: 'assets/images/icons/contact-icon2.svg',

      contents: [
        '+91 00000 00000'
      ]
    },

    {
      type: 'mail',
      title: 'Email Us',
      icon: 'assets/images/icons/contact-icon3.svg',

      contents: [
        'support@peoplevault.com',
        'sales@peoplevault.com'
      ]
    }

  ];


  // =========================================================
  // DETAILED CONTACT INFORMATION
  // =========================================================

  contactInfo = [

    {
      icon: 'ph-bold ph-map-pin',
      title: 'Location',
      description:
        'PeopleVault HRMS serves organizations looking to simplify employee and workforce management.',
      value: 'India'
    },

    {
      icon: 'ph-bold ph-phone',
      title: 'Phone',
      description:
        'Talk to our team about PeopleVault HRMS, product features and implementation.',
      value: '+91 00000 00000'
    },

    {
      icon: 'ph-bold ph-envelope-simple',
      title: 'Email',
      description:
        'Send us your questions and our team will get back to you.',
      value: 'support@peoplevault.com'
    },

    {
      icon: 'ph-bold ph-clock',
      title: 'Support Hours',
      description:
        'Our team is available during regular business hours for product and support enquiries.',
      value: 'Monday – Friday'
    }

  ];


  // =========================================================
  // CONTACT REASONS
  // =========================================================

  contactReasons = [

    {
      icon: 'ph-bold ph-presentation-chart',
      title: 'Book a Demo',
      description:
        'See how PeopleVault can help your organization manage employees and HR operations from one platform.'
    },

    {
      icon: 'ph-bold ph-question',
      title: 'Product Questions',
      description:
        'Have questions about HRMS features, employee management, attendance, leave or other functionality?'
    },

    {
      icon: 'ph-bold ph-headset',
      title: 'Customer Support',
      description:
        'Already using PeopleVault? Contact our team for assistance with your account or platform.'
    },

    {
      icon: 'ph-bold ph-buildings',
      title: 'Business Enquiry',
      description:
        'Talk to our team about your organization, workforce requirements and HR management needs.'
    }

  ];


  // =========================================================
  // SOCIAL MEDIA
  // =========================================================

  socialLinks = [

    {
      name: 'LinkedIn',
      icon: 'ph ph-linkedin-logo',
      url: 'https://www.linkedin.com/'
    },

    {
      name: 'Instagram',
      icon: 'ph ph-instagram-logo',
      url: 'https://www.instagram.com/'
    },

    {
      name: 'Facebook',
      icon: 'ph ph-facebook-logo',
      url: 'https://www.facebook.com/'
    },

    {
      name: 'YouTube',
      icon: 'ph ph-youtube-logo',
      url: 'https://www.youtube.com/'
    }

  ];


  // =========================================================
  // CTA TAGS
  // =========================================================

  tags2 = [

    {
      label: 'HRMS',
      textColor: 'text-white',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Employee Management',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'Attendance',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Leave Management',
      textColor: 'text-heading',
      bgClass: 'bg-yellow'
    },

    {
      label: 'Payroll',
      textColor: 'text-heading',
      bgClass: 'bg-orange'
    },

    {
      label: 'HR Technology',
      textColor: 'text-heading',
      bgClass: 'gradient-bg-six'
    },

    {
      label: 'Workforce Management',
      textColor: 'text-heading',
      bgClass: 'bg-paste'
    },

    {
      label: 'HR Data Security',
      textColor: 'text-heading',
      bgClass: 'bg-pink'
    }

  ];


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private animationService: AnimationService,
    private toastService: ToastService
  ) {}


  // =========================================================
  // AFTER VIEW INIT
  // =========================================================

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }


  // =========================================================
  // CONTACT FORM SUBMIT
  // =========================================================

  onContactSubmit(event: Event): void {

    event.preventDefault();

    // -----------------------------------------
    // Required field validation
    // -----------------------------------------

    if (
      !this.contactForm.name.trim() ||
      !this.contactForm.email.trim() ||
      !this.contactForm.message.trim()
    ) {

      this.toastService.error(
        'Required Fields',
        'Please complete your name, email and message.',
        'ph-bold ph-warning-circle'
      );

      return;
    }


    // -----------------------------------------
    // Email validation
    // -----------------------------------------

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.contactForm.email.trim())) {

      this.toastService.error(
        'Invalid Email',
        'Please enter a valid email address.',
        'ph-bold ph-envelope'
      );

      return;
    }


    // -----------------------------------------
    // Message validation
    // -----------------------------------------

    if (this.contactForm.message.trim().length < 10) {

      this.toastService.error(
        'Message Too Short',
        'Please provide at least 10 characters in your message.',
        'ph-bold ph-note-pencil'
      );

      return;
    }


    // -----------------------------------------
    // Loading
    // -----------------------------------------

    this.isLoading = true;


    // -----------------------------------------
    // Temporary API simulation
    // -----------------------------------------

    setTimeout(() => {

      this.isLoading = false;

      this.toastService.success(
        'Message Sent',
        `Thank you ${this.contactForm.name}. Our PeopleVault team will get back to you soon.`,
        'ph-bold ph-check-circle'
      );


      // Reset form

      this.contactForm = {
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      };

    }, 1500);

  }


  // =========================================================
  // SOCIAL MEDIA
  // =========================================================

  onSocialClick(platform: string): void {

    this.toastService.info(
      platform,
      `Opening PeopleVault ${platform} page.`,
      'ph-bold ph-share-network'
    );

  }


  // =========================================================
  // PHONE
  // =========================================================

  onPhoneClick(phone: string): void {

    this.toastService.info(
      'Contact PeopleVault',
      `Calling ${phone}.`,
      'ph-bold ph-phone'
    );

  }


  // =========================================================
  // EMAIL
  // =========================================================

  onEmailClick(email: string): void {

    this.toastService.info(
      'Email PeopleVault',
      `Opening your email client for ${email}.`,
      'ph-bold ph-envelope'
    );

  }


  // =========================================================
  // CONTACT REASON
  // =========================================================

  onContactReasonClick(reason: string): void {

    this.toastService.info(
      reason,
      `You selected ${reason}.`,
      'ph-bold ph-arrow-right'
    );

  }

}