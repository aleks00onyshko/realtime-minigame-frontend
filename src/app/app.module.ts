import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { RootStoreModule, CustomSerializer } from 'store';
import { RootComponentsModule, RootComponent } from './components';
import { TokenInterceptor } from './components/authentication/core';

@NgModule({
  imports: [
    BrowserModule,
    RootComponentsModule,
    RootStoreModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
