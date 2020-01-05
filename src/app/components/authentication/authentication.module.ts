import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { RootCoreModule } from 'core';
import { AuthenticationComponentsModule } from './components';
import { AuthenticationStoreModule } from './store';

@NgModule({
  imports: [
    RootCoreModule,
    AuthenticationComponentsModule,
    AuthenticationStoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
