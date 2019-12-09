import { NgModule } from '@angular/core';

import { RegisterComponent } from './root';
import { AppSharedModule } from 'shared';

const COMPONENTS = [RegisterComponent];

@NgModule({
  imports: [AppSharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class RegisterComponentsModule {}
