import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define an interface for the user object
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/v1/auth/signup';

  constructor(private http: HttpClient) { }

  // Update the register method to accept a User object and role
  register(user: User, role: string): Observable<any> {
    // Add the role to the user object
    user.role = role;

    return this.http.post<any>(this.baseUrl, user);
  }
}