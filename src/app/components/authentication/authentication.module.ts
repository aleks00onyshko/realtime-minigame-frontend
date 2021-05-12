import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponentsModule } from './components';
import { AuthenticationStoreModule } from './store';
import { AuthenticationCoreModule } from './core';

@NgModule({
  imports: [
    AuthenticationCoreModule,
    AuthenticationComponentsModule,
    AuthenticationStoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
