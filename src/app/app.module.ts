import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { RootStoreModule, CustomSerializer } from 'store';
import { RootComponentsModule, RootComponent } from './components';
import { AuthenticationCoreModule, TokenInterceptor } from './components/authentication/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RootComponentsModule,
    RootStoreModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    AuthenticationCoreModule
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
