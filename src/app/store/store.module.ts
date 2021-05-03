import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HydrationEffects, hydrationMetaReducer } from './meta-reducers/hydration';

import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers: [hydrationMetaReducer] }),
    EffectsModule.forRoot([HydrationEffects])
  ],
  exports: [StoreModule]
})
export class RootStoreModule {}
