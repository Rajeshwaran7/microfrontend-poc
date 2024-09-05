import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('user/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'sharedui',
    loadComponent: () =>
      import(
        'libs/shared/data-access-user/src/lib/shared-data-access-user/shared-data-access-user.component'
      ).then((m) => m.SharedDataAccessUserComponent),
  },
];
