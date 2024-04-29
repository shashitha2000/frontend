import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MockAuthService } from 'src/app/service/mock-auth.service';
import { LoginRegisterDialogComponent } from '../login-register-dialog/login-register-dialog.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  isLoggedIn = false; // Initially, the user is not logged in

  constructor(public dialog: MatDialog, private authService: MockAuthService) {
    this.isLoggedIn = this.authService.isAuthenticated();
    console.log('isLoggedIn:', this.isLoggedIn); // Add this console log statement
  }

  openDialog(tab: 'login' | 'register'): void {
    const dialogRef = this.dialog.open(LoginRegisterDialogComponent, {
      width: '400px',
      data: { selectedTab: tab }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can add logic here to handle the result if needed
    });
  }
}
