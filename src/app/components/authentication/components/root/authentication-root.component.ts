import { Component } from '@angular/core';

import { AuthFacade } from 'auth/store';

@Component({
  selector: 'dp-authentication-master',
  styleUrls: ['./authentication-root.component.scss'],
  template: `
    <mat-toolbar class="app-header">
      <div>
        <span class="header-tittle">PackmanLab.io</span>
      </div>
      <span class="nav-tool-items">
        <a mat-button routerLink="login" routerLinkActive="active">Log in</a>
        <a mat-button routerLink="register" routerLinkActive="active">Register</a>
      </span>
    </mat-toolbar>

    <ng-container *ngIf="!(authFacade.loading$ | async); else spinner">
      <router-outlet></router-outlet>
    </ng-container>

    <ng-template #spinner>
      <div class="spinner">
        <mat-spinner></mat-spinner>
      </div>
    </ng-template>
  `
})
export class AuthenticationRootComponent {
  constructor(public authFacade: AuthFacade) {}
}
