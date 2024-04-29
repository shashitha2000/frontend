import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  reservation: any; // Assuming reservation object with priceRange property
  totalSum: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reservation = history.state.reservation;
      this.calculateTotalSum();
    });
  }

  calculateTotalSum() {
    if (this.reservation && this.reservation.priceRange) {
      switch (this.reservation.priceRange) {
        case 'low':
      this.totalSum = 1500 * this.reservation.numberOfTickets;
      break;
    case 'medium':
      this.totalSum = 3000 * this.reservation.numberOfTickets;
      break;
    case 'high':
      this.totalSum = 5000 * this.reservation.numberOfTickets;
      break;
    default:
      this.totalSum = 0;
      }
    }
  }
}
