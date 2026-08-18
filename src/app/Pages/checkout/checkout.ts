import { Component } from '@angular/core';
import { Breadcrumb } from '../../component/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-checkout',
  imports: [Breadcrumb, CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  // Form properties
  checkoutForm = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    houseNumber: '',
    apartment: '',
    zipCode: '',
    phone: '',
    notes: ''
  };

  // Payment properties
  paymentMethod = '';
  voucherCode = '';

  // Loading state
  isLoading = false;

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

  // Handle checkout form submission
  onCheckoutSubmit(event: Event) {
    event.preventDefault();

    // Required fields validation
    const requiredFields = [
      { field: 'firstName', label: 'First Name' },
      { field: 'lastName', label: 'Last Name' },
      { field: 'address', label: 'Address' },
      { field: 'city', label: 'City' },
      { field: 'zipCode', label: 'Zip Code' },
      { field: 'phone', label: 'Phone Number' }
    ];

    for (const requiredField of requiredFields) {
      if (!this.checkoutForm[requiredField.field as keyof typeof this.checkoutForm]) {
        this.toastService.error(
          'Required Field Missing',
          `${requiredField.label} is required`,
          'ph-bold ph-warning-circle'
        );
        return;
      }
    }

    // Phone number validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(this.checkoutForm.phone.replace(/\s/g, ''))) {
      this.toastService.error(
        'Invalid Phone Number',
        'Please enter a valid phone number',
        'ph-bold ph-phone'
      );
      return;
    }

    // Zip code validation
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(this.checkoutForm.zipCode)) {
      this.toastService.error(
        'Invalid Zip Code',
        'Please enter a valid zip code (e.g., 12345 or 12345-6789)',
        'ph-bold ph-map-pin-simple'
      );
      return;
    }

    // Payment method validation
    if (!this.paymentMethod) {
      this.toastService.error(
        'Payment Method Required',
        'Please select a payment method',
        'ph-bold ph-credit-card'
      );
      return;
    }

    // Simulate checkout process
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;

      // Simulate successful checkout
      this.toastService.success(
        'Order Placed Successfully',
        `Thank you ${this.checkoutForm.firstName}! Your order has been placed and will be processed soon.`,
        'ph-bold ph-check-circle'
      );

      // Clear form
      this.checkoutForm = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        houseNumber: '',
        apartment: '',
        zipCode: '',
        phone: '',
        notes: ''
      };
      this.paymentMethod = '';
      this.voucherCode = '';

    }, 2000);
  }

  // Handle voucher code submission
  onVoucherSubmit(event: Event) {
    event.preventDefault();

    if (!this.voucherCode) {
      this.toastService.error(
        'Voucher Code Required',
        'Please enter a voucher code',
        'ph-bold ph-ticket'
      );
      return;
    }

    // Simulate voucher validation
    this.toastService.info(
      'Voucher Code Applied',
      'Your voucher code has been applied successfully!',
      'ph-bold ph-ticket'
    );

    this.voucherCode = '';
  }

  // Handle payment method selection
  onPaymentMethodChange(method: string) {
    this.paymentMethod = method;
    this.toastService.info(
      'Payment Method Selected',
      `You have selected ${method}`,
      'ph-bold ph-credit-card'
    );
  }

  // Handle proceed to pay
  onProceedToPay() {
    if (!this.paymentMethod) {
      this.toastService.error(
        'Payment Method Required',
        'Please select a payment method before proceeding',
        'ph-bold ph-credit-card'
      );
      return;
    }

    this.toastService.success(
      'Payment Processing',
      'Redirecting to payment gateway...',
      'ph-bold ph-arrow-right'
    );
  }
}
