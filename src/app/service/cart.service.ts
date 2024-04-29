import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() { }

  addItem(item: any) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
