import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'https://localhost:8080/api/v1/products/feed-back';

  constructor(private http: HttpClient) { }

  postReview(userId: number, productId: number, stars: number, comment: string) {
    const url = `${this.apiUrl}/${userId}/${productId}`;
    return this.http.post(url, { stars, comment });
  }
}
