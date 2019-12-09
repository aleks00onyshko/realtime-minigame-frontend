import { NgModule } from '@angular/core';

import { LoginComponentsModule } from './components';

@NgModule({
  imports: [LoginComponentsModule],
  exports: [LoginComponentsModule]
})
export class LoginModule {}
