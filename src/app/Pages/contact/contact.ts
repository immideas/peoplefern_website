import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [Breadcrumb, CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  // Form properties
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  // Loading state
  isLoading = false;

  contactCards = [
    {
      type: 'address',
      title: 'address line',
      icon: 'assets/images/icons/contact-icon1.svg',
      contents: ['Bowery St, New York, 37 USA NY 10013,USA']
    },
    {
      type: 'phone',
      title: 'Phone Number',
      icon: 'assets/images/icons/contact-icon2.svg',
      contents: ['+1255 - 568 - 6523 4374-221', '+1255 - 568 - 6523']
    },
    {
      type: 'mail',
      title: 'Mail Address',
      icon: 'assets/images/icons/contact-icon3.svg',
      contents: ['email@example.com', 'info@yourdomain.com']
    }
  ];
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
    private toastService: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.animationService.initAnimations();
  }

  // Handle contact form submission
  onContactSubmit(event: Event) {
    event.preventDefault();

    // Basic validation
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.toastService.error(
        'Validation Error',
        'Please fill in all required fields',
        'ph-bold ph-warning-circle'
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.toastService.error(
        'Invalid Email',
        'Please enter a valid email address',
        'ph-bold ph-envelope'
      );
      return;
    }

    // Message length validation
    if (this.contactForm.message.length < 10) {
      this.toastService.error(
        'Message Too Short',
        'Please enter a message with at least 10 characters',
        'ph-bold ph-note-pencil'
      );
      return;
    }

    // Simulate contact form submission
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;

      // Simulate successful submission
      this.toastService.success(
        'Message Sent Successfully',
        `Thank you ${this.contactForm.name}! We'll get back to you soon.`,
        'ph-bold ph-paper-plane-tilt'
      );

      // Clear form
      this.contactForm = {
        name: '',
        email: '',
        message: ''
      };

    }, 1500);
  }

  // Handle social media clicks
  onSocialClick(platform: string) {
    this.toastService.info(
      'Social Media',
      `Redirecting to our ${platform} page...`,
      'ph-bold ph-share-network'
    );
  }

  // Handle phone number clicks
  onPhoneClick(phone: string) {
    this.toastService.info(
      'Phone Call',
      `Calling ${phone}...`,
      'ph-bold ph-phone'
    );
  }

  // Handle email clicks
  onEmailClick(email: string) {
    this.toastService.info(
      'Email',
      `Opening email client for ${email}...`,
      'ph-bold ph-envelope'
    );
  }
}
