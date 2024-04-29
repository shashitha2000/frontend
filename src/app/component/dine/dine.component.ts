import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dine',
  templateUrl: './dine.component.html',
  styleUrls: ['./dine.component.css']
})
export class DineComponent implements OnInit {
  images = [
    { url: 'https://i.postimg.cc/Qxv1vbxJ/ai-food.png' },
    { url: 'https://i.postimg.cc/BZcTLDpq/ai-food-oil.png' },
    { url: 'https://i.postimg.cc/jSHV7MD8/ai-food-girl.png' }
  ];

  currentSlideIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds
  }

  redirectToSrilankanCuisine(): void {
    // Redirect to the page for more information about Srilankan cuisine
    this.router.navigate(['/srilankan-cuisine']);
  }
}
