import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent {
  reservationForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TicketReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router // Inject the Router
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      reserveDate: ['', Validators.required],
      reserveTime: ['', Validators.required],
      priceRange: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() {
    return this.reservationForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      // Redirect to the checkout component with reservation data
      this.router.navigate(['/checkout'], { state: { reservation } });
      // Close the dialog
      this.dialogRef.close();
    }
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // Add event handling for date picker
  }
}
