import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { AuthenticationRootComponent } from './components/root/authentication-root.component';
import { AuthenticationCoreModule, AuthGuard } from './core';

const authenticationRoutes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationRootComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
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
