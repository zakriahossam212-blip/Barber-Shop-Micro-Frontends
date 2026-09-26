import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Barber, BookingFormState, TimeSlot } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';

/**
 * Step 2: Barber and date/time selection
 */
@Component({
  selector: 'app-barber-datetime-selection',
  template: `
    <div class="booking-barber-selection">
      <h2>Select Barber & Time</h2>

        <div class="booking-barbers-grid">
        <button
          *ngFor="let barber of barbers$ | async"
          (click)="selectBarber(barber)"
          [class.selected]="selectedBarber?.id === barber.id"
            class="ui-selection-card booking-barber-card"
          type="button"
        >
          <div class="barber-header">
            <img class="barber-avatar" [src]="barber.imageUrl" [alt]="barber.name" />
            <div class="barber-info">
              <h3>{{ barber.name }}</h3>
              <p class="arabic">{{ barber.nameAr }}</p>
            </div>
            <span class="rating">★ {{ barber.rating }}</span>
          </div>
          <p class="specialty">{{ barber.specialty }}</p>
        </button>
      </div>

      <div *ngIf="selectedBarber" class="booking-time-slots">
        <h3>Available Times</h3>
        <div class="booking-slots-grid">
          <button
            *ngFor="let slot of availableSlots$ | async"
            (click)="selectTimeSlot(slot)"
            [class.selected]="selectedSlot?.date === slot.date && selectedSlot?.startTime === slot.startTime"
            class="ui-selection-card booking-time-slot"
            type="button"
          >
            <span class="date">{{ formatDate(slot.date) }}</span>
            <span class="time">{{ slot.startTime }} - {{ slot.endTime }}</span>
          </button>
        </div>
      </div>

      <div class="ui-actions booking-actions">
        <button (click)="previousStep()" class="ui-button ui-button--secondary" type="button">
          Back
        </button>
        <button
          (click)="nextStep()"
          [disabled]="!selectedBarber || !selectedSlot"
          class="ui-button ui-button--primary"
          type="button"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class BarberDateTimeSelectionComponent implements OnInit {
  @Input() formState!: BookingFormState;

  private barberSubject = new BehaviorSubject<string | null>(null);
  barbers$!: Observable<Barber[]>;
  availableSlots$!: Observable<TimeSlot[]>;

  selectedBarber: Barber | null = null;
  selectedSlot: TimeSlot | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.barbers$ = this.bookingService.getBarbersByService(
      this.formState.service?.id || ''
    );

    this.availableSlots$ = this.barberSubject.pipe(
      switchMap((barberId) => {
        if (!barberId) {
          return new Observable<TimeSlot[]>((observer) => observer.next([]));
        }
        return this.bookingService.getAvailableSlots(barberId);
      })
    );
  }

  selectBarber(barber: Barber): void {
    this.selectedBarber = barber;
    this.selectedSlot = null;
    this.barberSubject.next(barber.id);
  }

  selectTimeSlot(slot: TimeSlot): void {
    this.selectedSlot = slot;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }

  nextStep(): void {
    if (this.selectedBarber && this.selectedSlot) {
      this.bookingService.selectBarberAndSlot(
        this.selectedBarber,
        this.selectedSlot
      );
    }
  }

  previousStep(): void {
    this.bookingService.previousStep();
  }
}
