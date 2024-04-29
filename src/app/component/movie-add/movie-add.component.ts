import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});
  movieAdded: boolean = false;

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      filmName: ['', Validators.required],
      description: ['', Validators.required],
      showTime: ['', Validators.required],
      img: ['', Validators.required],
      duration: ['', Validators.required],
      seats: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(
        (response) => {
          console.log('Movie added successfully:', response);
          this.movieAdded = true; // Set flag to true
          // Optionally, reset the form after successful submission
          this.movieForm.reset();
        },
        (error) => {
          console.error('Error adding movie:', error);
        }
      );
    } else {
      this.movieForm.markAllAsTouched();
    }
  }
}
