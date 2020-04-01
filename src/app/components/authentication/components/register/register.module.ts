import { NgModule } from '@angular/core';

import { RegisterComponentsModule } from './components';

@NgModule({
  imports: [RegisterComponentsModule],
  exports: [RegisterComponentsModule]
})
export class RegisterModule {}
