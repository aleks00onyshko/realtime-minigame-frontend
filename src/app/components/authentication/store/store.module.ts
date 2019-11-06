import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAuthReducers from './reducers';
import * as fromAuthEffects from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('authentication', fromAuthReducers.reducers),
    EffectsModule.forFeature(fromAuthEffects.effects)
  ],
  exports: [StoreModule]
})
export class AuthenticationStoreModule {}
