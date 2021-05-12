import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'shared';
import { EmailVerificationComponent } from './email-verification';
import { AuthenticationRootComponent } from './root';

const COMPONENTS = [AuthenticationRootComponent, EmailVerificationComponent];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AuthenticationComponentsModule {}
