import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-carnage',
  templateUrl: './carnage.component.html',
  styleUrls: ['./carnage.component.css']
})
export class CarnageComponent implements OnInit {
  products: any[] = [];
  review: any = { stars: 0, comment: '' }; // Object to store review data
  apiBaseUrl: string = 'http://localhost:8080';
  userId: string = 'yourUserId'; // Replace 'yourUserId' with the actual user ID

  constructor(private router: Router, private cartService: CartService, private productService: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.products = response;
    });
  }

  addToCart(product: any) {
    // Add item to the cart
    this.cartService.addItem(product);
  }

  goToCart(product: any) {
    // Add item to the cart
    this.cartService.addItem(product);

    // Navigate to the cart component
    this.router.navigate(['/cart']);
  }

  submitReview() {
    // Submit review to the API
    const url = `${this.apiBaseUrl}feed-back/${this.userId}`;
    this.http.post(url, this.review).subscribe(() => {
      console.log('Review submitted successfully');
      // Reset the review object after submission
      this.review = { stars: 0, comment: '' };
    }, error => {
      console.error('Failed to submit review', error);
      // Handle error
    });
  }
}
