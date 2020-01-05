import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './root';
import { AppSharedModule } from 'shared';

const COMPONENTS = [LoginComponent];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class LoginComponentsModule {}
