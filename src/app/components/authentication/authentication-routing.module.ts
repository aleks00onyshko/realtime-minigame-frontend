import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import * as fromLoginModule from './components/login';
import * as fromRegisterModule from './components/register';
import { AuthenticationRootComponent } from './components/root/authentication-root.component';

const authenticationRoutes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationRootComponent,
    children: [
      { path: 'login', component: fromLoginModule.LoginComponent },
      { path: 'register', component: fromRegisterModule.RegisterComponent },
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
