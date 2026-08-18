import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormSubmitService } from '../services/form-submit.service';

@Directive({
  selector: '[appFormSubmit]',
  standalone: true
})
export class FormSubmitDirective implements OnInit {
  @Input() appFormSubmit: any = {};
  @Input() successMessage: string = 'Form submitted successfully!';
  @Input() successTitle: string = 'Success';
  @Input() successIcon: string = 'ph-fill ph-check-circle';
  @Input() clearForm: boolean = true;
  @Input() showToast: boolean = true;

  constructor(
    private el: ElementRef<HTMLFormElement>,
    private formSubmitService: FormSubmitService
  ) {}

  ngOnInit() {
    // Merge any options passed via appFormSubmit input
    if (this.appFormSubmit) {
      this.successMessage = this.appFormSubmit.successMessage || this.successMessage;
      this.successTitle = this.appFormSubmit.successTitle || this.successTitle;
      this.successIcon = this.appFormSubmit.successIcon || this.successIcon;
      this.clearForm = this.appFormSubmit.clearForm !== undefined ? this.appFormSubmit.clearForm : this.clearForm;
      this.showToast = this.appFormSubmit.showToast !== undefined ? this.appFormSubmit.showToast : this.showToast;
    }
  }

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    event.preventDefault();

    const form = this.el.nativeElement;

    this.formSubmitService.handleFormSubmit(form, {
      successMessage: this.successMessage,
      successTitle: this.successTitle,
      successIcon: this.successIcon,
      clearForm: this.clearForm,
      showToast: this.showToast
    });
  }
}
