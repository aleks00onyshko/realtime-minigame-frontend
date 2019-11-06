import { NgModule } from '@angular/core';

import * as fromComponents from './components';

@NgModule({
  imports: [fromComponents.RegisterComponentsModule],
  exports: [fromComponents.RegisterComponentsModule]
})
export class RegisterModule {}
