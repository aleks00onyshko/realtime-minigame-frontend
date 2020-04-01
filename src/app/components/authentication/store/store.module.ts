import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducer } from './reducers';
import { AuthEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('authentication', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [StoreModule]
})
export class AuthenticationStoreModule {}
