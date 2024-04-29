import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketReservationService {
  private apiUrl = 'http://localhost:8080/authenticated-user/movie-booking/'; // Your backend API URL

  constructor(private http: HttpClient) { }

  saveReservation(userId: number, reservationData: any) {
    return this.http.post(`${this.apiUrl}${userId}`, reservationData);
  }
}
