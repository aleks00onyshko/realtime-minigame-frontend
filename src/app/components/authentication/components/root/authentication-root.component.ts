import { Component } from '@angular/core';

@Component({
  selector: 'dp-authentication-master',
  template: `
    <mat-toolbar color="primary" class="app-header">
      <div><a href="https://www.angular.io" target="_blank" class="header-tittle">Angular</a></div>
      <span class="nav-tool-items">
        <a mat-button routerLink="login" routerLinkActive="active">Log in</a>
        <a mat-button routerLink="register" routerLinkActive="active">Register</a>
      </span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AuthenticationRootComponent {}
