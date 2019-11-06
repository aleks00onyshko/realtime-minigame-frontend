import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import * as fromCore from 'core';
import * as fromAuthComponents from './components';
import * as fromAuthStoreModule from './store';

@NgModule({
  imports: [
    fromCore.RootCoreModule,
    fromAuthComponents.AuthenticationComponentsModule,
    fromAuthStoreModule.AuthenticationStoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
