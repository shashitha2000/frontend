import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() newItem: any; // Input for new item to add to the cart
  items: any[] = [
    { id: 1, description: 'Product 1', price: 1000, quantity: 2 },
    { id: 2, description: 'Product 2', price: 1500, quantity: 1 },
    { id: 3, description: 'Product 3', price: 2000, quantity: 3 }
  ];

  constructor() { }

  ngOnChanges() {
    if (this.newItem) {
      this.addItem(this.newItem);
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  private addItem(item: any) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }
}
