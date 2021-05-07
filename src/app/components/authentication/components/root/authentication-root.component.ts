import { Component } from '@angular/core';
import { AuthFacade } from 'auth/store';

@Component({
  selector: 'dp-authentication-master',
  styleUrls: ['./authentication-root.component.scss'],
  template: `
    <div class="background-wrapper">
      <div class="bravo-logo">
        <img src="assets/bravo-logo.svg" alt="logo" />
      </div>
      <ng-container *ngIf="!(authFacade.loading$ | async); else spinner">
        <router-outlet></router-outlet>
      </ng-container>

      <ng-template #spinner>
        <div class="spinner">
          <mat-spinner></mat-spinner>
        </div>
      </ng-template>
    </div>
  `
})
export class AuthenticationRootComponent {
  constructor(public authFacade: AuthFacade) {}
}
