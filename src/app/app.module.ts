import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import * as fromRootStore from 'store';
import * as fromComponents from './components';

@NgModule({
  imports: [
    BrowserModule,
    fromComponents.RootComponentsModule,
    fromRootStore.RootStoreModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({
      serializer: fromRootStore.CustomSerializer
    }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' }
    }
  ],
  bootstrap: [fromComponents.RootComponent]
})
export class AppModule {}
