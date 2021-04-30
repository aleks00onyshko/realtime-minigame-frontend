import { NgModule } from '@angular/core';

import { AuthGuard, SystemGuard, TokenInterceptor } from './services';

@NgModule({
  providers: [AuthGuard, SystemGuard, TokenInterceptor]
})
export class AuthenticationCoreModule {}
