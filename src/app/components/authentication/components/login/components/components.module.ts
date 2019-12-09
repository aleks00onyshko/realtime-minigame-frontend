import { NgModule } from '@angular/core';

import { LoginComponent } from './root';
import { AppSharedModule } from 'shared';

const COMPONENTS = [LoginComponent];

@NgModule({
  imports: [AppSharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class LoginComponentsModule {}
