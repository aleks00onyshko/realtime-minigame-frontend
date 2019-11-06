import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { RootCoreModule } from '../../core.module';

import * as fromCore from 'core';

@Injectable({
  providedIn: RootCoreModule
})
export class TokenInterceptor {
  constructor(private authService: fromCore.AuthService) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler){
  //   const clonedRequest = req.clone({
  //     setHeaders: {
  //       authorization: this.authService.getToken()
  //     }
  //   })
  // }
}
