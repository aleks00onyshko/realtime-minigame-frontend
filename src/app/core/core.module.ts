import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppSharedModule } from 'shared';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    AppSharedModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ]
})
export class RootCoreModule {}
