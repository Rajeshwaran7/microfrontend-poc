import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../../libs/shared/data-access-user/src/lib/user.service';
import { SharedDataAccessUserComponent } from '../../../../../libs/shared/data-access-user/src/lib/shared-data-access-user/shared-data-access-user.component';
import { UiButtonComponent } from '../../../../../libs/ui/button/src/lib/ui-button/ui-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, SharedDataAccessUserComponent, UiButtonComponent],
  selector: 'ng-mf-login-entry',
  template: `
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <h2 class="form-title">Login</h2>
        <label>
          <span class="label-text">Username:</span>
          <input type="text" name="username" [(ngModel)]="username" placeholder="Enter your username" />
        </label>
        <label>
          <span class="label-text">Password:</span>
          <input type="password" name="password" [(ngModel)]="password" placeholder="Enter your password" />
        </label>
        <lib-ui-button>Login</lib-ui-button>
      </form>
      
      <div *ngIf="isLoggedIn$ | async" class="login-status">User is logged in!</div>
    </div>

    <lib-shared-data-access-user></lib-shared-data-access-user>
  `,
  styles: [
    `
      .login-app {
        width: 400px; /* Fixed width for better control */
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }
      .login-form {
        display: flex;
        flex-direction: column;
      }
      .form-title {
        font-size: 24px;
        margin-bottom: 16px;
        text-align: center;
      }
      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 12px;
      }
      .label-text {
        font-weight: bold;
        margin-bottom: 4px;
      }
      input[type="text"],
      input[type="password"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
      }
      lib-ui-button {
        margin-top: 16px;
        display: block;
        width: 100%;
      }
      .login-status {
        margin-top: 16px;
        font-size: 16px;
        color: green;
        text-align: center;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ :any;

  constructor(private userService: UserService) {
    this.isLoggedIn$ = this.userService.isUserLoggedIn$;
  }

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
