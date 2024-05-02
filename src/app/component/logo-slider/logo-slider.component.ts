import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class LogoSliderComponent {
  logos = [
    { url: 'https://i.postimg.cc/sXVhxsN0/images.png' },
    { url: 'https://i.postimg.cc/pXD5f9M1/images-1.png' },
    { url: 'https://i.postimg.cc/595fp8jv/images-2.png' },
    { url: 'https://i.postimg.cc/fT2ngCs3/images-4.jpg' },
    { url: 'https://i.postimg.cc/FHdqCQGq/images-3.png' }
  ];
}
