import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookingFormState, CustomerDetails } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';

/**
 * Step 3: Customer details form
 */
@Component({
  selector: 'app-customer-details-form',
  template: `
    <div class="booking-customer-details">
      <h2>Your Details</h2>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="ui-form-group booking-form-group">
          <label for="firstName">First Name *</label>
          <input
            id="firstName"
            type="text"
            formControlName="firstName"
            placeholder="e.g., Ahmed"
            class="ui-field"
          />
          <span
            *ngIf="form.get('firstName')?.hasError('required') && form.get('firstName')?.touched"
            class="ui-form-error"
          >
            First name is required
          </span>
        </div>

        <div class="ui-form-group booking-form-group">
          <label for="lastName">Last Name *</label>
          <input
            id="lastName"
            type="text"
            formControlName="lastName"
            placeholder="e.g., Hassan"
            class="ui-field"
          />
          <span
            *ngIf="form.get('lastName')?.hasError('required') && form.get('lastName')?.touched"
            class="ui-form-error"
          >
            Last name is required
          </span>
        </div>

        <div class="ui-form-group booking-form-group">
          <label for="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            formControlName="phone"
            placeholder="e.g., +20 123 4567 890"
            class="ui-field"
          />
          <span
            *ngIf="form.get('phone')?.hasError('required') && form.get('phone')?.touched"
            class="ui-form-error"
          >
            Phone number is required
          </span>
        </div>

        <div class="ui-form-group booking-form-group">
          <label for="email">Email *</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="e.g., ahmed@example.com"
            class="ui-field"
          />
          <span
            *ngIf="form.get('email')?.hasError('required') && form.get('email')?.touched"
            class="ui-form-error"
          >
            Email is required
          </span>
          <span
            *ngIf="form.get('email')?.hasError('email') && form.get('email')?.touched"
            class="ui-form-error"
          >
            Please enter a valid email
          </span>
        </div>

        <div class="ui-form-group booking-form-group">
          <label for="notes">Notes (optional)</label>
          <textarea
            id="notes"
            formControlName="notes"
            placeholder="Any special requests?"
            class="ui-textarea"
            rows="4"
          ></textarea>
        </div>

        <div class="ui-actions booking-actions">
          <button
            type="button"
            (click)="previousStep()"
            class="ui-button ui-button--secondary"
          >
            Back
          </button>
          <button
            type="submit"
            [disabled]="!form.valid"
            class="ui-button ui-button--primary"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  `,
})
export class CustomerDetailsFormComponent implements OnInit {
  @Input() formState!: BookingFormState;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      notes: [''],
    });

    // Pre-fill if coming back from confirmation
    if (this.formState.customerDetails) {
      this.form.patchValue(this.formState.customerDetails);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const details: CustomerDetails = this.form.value;
      this.bookingService.submitCustomerDetails(details);
    }
  }

  previousStep(): void {
    this.bookingService.previousStep();
  }
}
