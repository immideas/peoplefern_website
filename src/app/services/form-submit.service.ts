import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  constructor(private toastService: ToastService) {}

  handleFormSubmit(form: HTMLFormElement, options?: {
    successMessage?: string;
    successTitle?: string;
    successIcon?: string;
    clearForm?: boolean;
    showToast?: boolean;
  }) {
    const config = {
      successMessage: 'Form submitted successfully!',
      successTitle: 'Success',
      successIcon: 'ph-fill ph-check-circle',
      clearForm: true,
      showToast: true,
      ...options
    };

    // Clear form fields if requested
    if (config.clearForm) {
      this.clearFormFields(form);
    }

    // Show success toast if requested
    if (config.showToast) {
      this.toastService.success(
        config.successTitle,
        config.successMessage,
        config.successIcon
      );
    }
  }

  private clearFormFields(form: HTMLFormElement) {
    // Clear all input fields
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.type !== 'submit' && input.type !== 'button') {
        input.value = '';
      }
    });

    // Clear all textarea fields
    const textareas = form.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.value = '';
    });

    // Clear all select fields
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
      (select as HTMLSelectElement).selectedIndex = 0;
    });
  }

  // Method to handle form submission with custom validation
  handleFormSubmitWithValidation(form: HTMLFormElement, validationFn?: (form: HTMLFormElement) => boolean, options?: {
    successMessage?: string;
    successTitle?: string;
    successIcon?: string;
    errorMessage?: string;
    errorTitle?: string;
    errorIcon?: string;
    clearForm?: boolean;
  }) {
    const config = {
      successMessage: 'Form submitted successfully!',
      successTitle: 'Success',
      successIcon: 'ph-fill ph-check-circle',
      errorMessage: 'Please check your input and try again.',
      errorTitle: 'Validation Error',
      errorIcon: 'ph-bold ph-warning-circle',
      clearForm: true,
      ...options
    };

    // Run validation if provided
    if (validationFn && !validationFn(form)) {
      this.toastService.error(
        config.errorTitle,
        config.errorMessage,
        config.errorIcon
      );
      return false;
    }

    // Handle successful submission
    this.handleFormSubmit(form, {
      successMessage: config.successMessage,
      successTitle: config.successTitle,
      successIcon: config.successIcon,
      clearForm: config.clearForm,
      showToast: true
    });

    return true;
  }
}
