import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { AuthenticationRootComponent } from './components/root/authentication-root.component';

const authenticationRoutes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationRootComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    fromLoginModule.LoginModule,
    fromRegisterModule.RegisterModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
