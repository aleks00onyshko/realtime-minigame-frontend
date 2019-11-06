import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import * as fromRootStoreReducers from './reducers';

@NgModule({
  imports: [StoreModule.forRoot(fromRootStoreReducers.reducers)],
  exports: [StoreModule]
})
export class RootStoreModule {}
