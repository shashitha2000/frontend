import { TestBed } from '@angular/core/testing';

import { TicketReservationService } from './ticket-reservation.service';

describe('TicketReservationService', () => {
  let service: TicketReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
