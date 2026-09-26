import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingFormState, BookingService as BookingServiceModel } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';

/**
 * Step 1: Service selection
 */
@Component({
  selector: 'app-service-selection',
  template: `
    <div class="booking-service-selection">
      <h2>Select a Service</h2>

        <div class="booking-services-grid">
        <button
          *ngFor="let service of services$ | async"
          (click)="selectService(service)"
          class="ui-selection-card booking-service-card"
          type="button"
        >
          <h3>{{ service.name }}</h3>
          <p class="arabic">{{ service.nameAr }}</p>
          <p class="description">{{ service.description }}</p>
          <div class="service-meta">
            <span class="duration">{{ service.durationMinutes }} min</span>
            <span class="price">{{ service.price }} EGP</span>
          </div>
        </button>
      </div>
    </div>
  `,
})
export class ServiceSelectionComponent implements OnInit {
  @Input() formState!: BookingFormState;

  services$!: Observable<BookingServiceModel[]>;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.services$ = this.bookingService.getServices();
  }

  selectService(service: BookingServiceModel): void {
    this.bookingService.selectService(service);
  }
}
