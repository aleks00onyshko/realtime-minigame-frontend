import { NgModule } from '@angular/core';

import { RegisterComponentsModule, RegisterComponent } from './components';

@NgModule({
  imports: [RegisterComponentsModule],
  exports: [RegisterComponentsModule]
})
export class RegisterModule {}
