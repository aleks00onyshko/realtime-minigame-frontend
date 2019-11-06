import { NgModule } from '@angular/core';

import * as fromLoginComponents from './components';

@NgModule({
  imports: [fromLoginComponents.LoginComponentsModule],
  exports: [fromLoginComponents.LoginComponentsModule]
})
export class LoginModule {}
