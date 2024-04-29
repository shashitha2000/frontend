import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private addMovieUrl = 'http://localhost:8080/api/v1/cinema/post-movie'; // URL for adding a movie
  private getMoviesUrl = 'http://localhost:8080/authenticated-user/get-all-movies'; // URL for getting all movies

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any[]>(this.getMoviesUrl);
  }

  addMovie(movieData: any) {
    return this.http.post(this.addMovieUrl, movieData);
  }
}
