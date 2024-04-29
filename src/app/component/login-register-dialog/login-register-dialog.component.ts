import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from 'src/app/service/dummy.service'; // Make sure to import the correct service

@Component({
  selector: 'app-login-register-dialog',
  templateUrl: './login-register-dialog.component.html',
  styleUrls: ['./login-register-dialog.component.css']
})
export class LoginRegisterDialogComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'USER'
  };

  constructor(
    private dummyService: DummyService, // Use the correct service name here
    private router: Router
  ) { }

  register() {
    const registrationSuccessful = this.dummyService.register(this.user);
    if (registrationSuccessful) {
      console.log('Registration successful');
      // Handle successful registration (e.g., show success message, redirect)
    } else {
      console.error('Registration failed');
      // Handle registration failure (e.g., show error message)
    }
  }

  login(email: string, password: string): void {
    const loginSuccessful = this.dummyService.login(email, password);
    if (loginSuccessful) {
      console.log('Login successful');
      const role = this.dummyService.getUserRole(email);
      switch (role) {
        case 'USER':
          console.log('Redirecting to user dashboard');
          this.router.navigate(['/dashboard']);
          break;
        case 'THEATER_OWNER':
          console.log('Redirecting to theater owner dashboard');
          this.router.navigate(['/theater-owner-dashboard']);
          break;
        case 'PRODUCT_OWNER':
          console.log('Redirecting to product owner dashboard');
          this.router.navigate(['/cloth-shop-owner']);
          break;
        default:
          console.error('Unknown role:', role);
          // Display an error message or handle as needed
          break;
      }
    } else {
      console.error('Login failed');
      // Handle login failure (e.g., show error message)
    }
  }
}
