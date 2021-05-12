import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmailVerificationComponent } from './components/email-verification';
import { AuthenticationRootComponent } from './components/root/authentication-root.component';
import { AuthenticationCoreModule, AuthGuard } from './core';

const authenticationRoutes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationRootComponent,
    children: [
      { path: 'email-verification', component: EmailVerificationComponent },
      { path: '', redirectTo: 'email-verification', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes),
    AuthenticationCoreModule
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
