import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'shared';
import { AuthenticationRootComponent } from './root';

const COMPONENTS = [AuthenticationRootComponent];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AuthenticationComponentsModule {}
