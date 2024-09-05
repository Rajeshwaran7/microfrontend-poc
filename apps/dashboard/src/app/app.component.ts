import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedDataAccessUserComponent } from '../../../../libs/shared/data-access-user/src/lib/shared-data-access-user/shared-data-access-user.component';
import { UserService } from 'libs/shared/data-access-user/src/lib/user.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({

  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,SharedDataAccessUserComponent,CommonModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'dashboard';
  isLoggedIn$ :Observable<boolean>;
  isLoggedIn: boolean = false;
  private subscription: Subscription;

  constructor(private userService: UserService) {
    this.isLoggedIn$ = this.userService.isUserLoggedIn$;
    this.subscription = this.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

  }

  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
