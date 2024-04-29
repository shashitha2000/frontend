import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  images = [
    { url: 'https://i.postimg.cc/kMkYxjkH/6b8e2814-6d9b-460e-8ddd-d1324125ec0a.png' },
    { url: 'https://i.postimg.cc/vBqnrH3s/d7fba1e3-1862-43db-8ea2-a4a6c1ee16ed.png' },
    { url: 'https://i.postimg.cc/2SQW5fLC/25f6a59f-ffce-488c-9a0e-d27cc558d9cf-1.png' }
  ];
  currentSlideIndex = 0;

  otherImages = [
    { url: 'https://i.postimg.cc/bwC5qWJM/pngtree-best-diamond-jewelry-designs-sparkling-diamonds-against-a-shimmering-white-bokeh-picture-ima.png' },
    { url: 'https://i.postimg.cc/ZKcbxb7d/pngtree-golddiamond-and-pearl-jewellery-beautiful-set-celebration-diamonds-pearl-photo-image-4818639.jpg' },
    { url: 'https://i.postimg.cc/zDQSXNST/770x515-img3-770x508.jpg' }
  ];
  currentOtherSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds
  }

  nextOtherSlide() {
    this.currentOtherSlideIndex = (this.currentOtherSlideIndex + 1) % this.otherImages.length;
  }

  prevOtherSlide() {
    this.currentOtherSlideIndex = (this.currentOtherSlideIndex - 1 + this.otherImages.length) % this.otherImages.length;
  }

  redirectToProductDetails(productId: string) {
    // Implement logic to navigate to product details
  }
}
