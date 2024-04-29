// dummy.service.ts

import { Injectable } from '@angular/core';

// dummy.service.ts

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  private users: any[] = [
    { email: 'user@example.com', password: 'user123', role: 'USER' },
    { email: 'theaterowner@example.com', password: 'theater123', role: 'THEATER_OWNER' },
    { email: 'productowner@example.com', password: 'product123', role: 'PRODUCT_OWNER' }
  ];

  constructor() { }

  // Simulate user registration
  register(user: any): boolean {
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      console.error('User already exists');
      return false;
    }
    this.users.push(user);
    console.log('User registered successfully');
    return true;
  }

  // Simulate user authentication
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      console.log('User authenticated');
      return true;
    } else {
      console.error('Authentication failed');
      return false;
    }
  }

  // Simulate getting the user role
  getUserRole(email: string): string {
    const user = this.users.find(u => u.email === email);
    return user ? user.role : 'USER';
  }
}
