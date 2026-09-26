import { Component, Input } from '@angular/core';

interface Step {
  number: number;
  label: string;
}

/**
 * Progress indicator for multi-step form
 */
@Component({
  selector: 'app-booking-progress',
  template: `
    <div class="booking-progress">
      <div
        *ngFor="let stepItem of steps"
        [class.active]="stepItem.number <= step"
        [class.completed]="stepItem.number < step"
        class="booking-progress-step"
      >
        <div class="progress-step-number">{{ stepItem.number }}</div>
        <div class="progress-step-label">{{ stepItem.label }}</div>
      </div>
    </div>
  `,
})
export class BookingProgressComponent {
  @Input() step = 1;

  steps: Step[] = [
    { number: 1, label: 'Service' },
    { number: 2, label: 'Barber & Time' },
    { number: 3, label: 'Details' },
    { number: 4, label: 'Confirmation' },
  ];
}
