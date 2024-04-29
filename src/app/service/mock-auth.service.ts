import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  private isLoggedIn = false;

  login(username: string, password: string): Observable<any> {
    // Simulate a successful login
    return of({ success: true, token: 'mock-token' }).pipe(
      delay(1000), // Simulate a delay to mimic the network request
      tap(() => {
        this.isLoggedIn = true; // Set isLoggedIn to true after successful login
      })
    );
  }

  

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }
}
