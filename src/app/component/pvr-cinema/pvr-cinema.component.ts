import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { TicketReservationComponent } from '../ticket-reservation/ticket-reservation.component'; // Import the TicketReservationComponent

@Component({
  selector: 'app-pvr-cinema',
  templateUrl: './pvr-cinema.component.html',
  styleUrls: ['./pvr-cinema.component.css']
})
export class PVRCinemaComponent {
  movies: any[] = [];


  constructor(private dialog: MatDialog, private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      (response) => {
        this.movies = response;
      },
      (error) => {
        console.error('Error getting movies:', error);
      }
    );
  }

  openTicketReservationDialog(movie: any) {
    this.dialog.open(TicketReservationComponent, {
      width: '500px',
      data: { movie }
    });
  }
}