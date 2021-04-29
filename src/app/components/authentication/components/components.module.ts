import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'shared';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthenticationRootComponent } from './root';

const COMPONENTS = [AuthenticationRootComponent, RegisterComponent, LoginComponent];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AuthenticationComponentsModule {}
