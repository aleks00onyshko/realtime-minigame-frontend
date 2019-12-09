import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { RootCoreModule } from '../../core.module';

import { AuthService } from 'core';

@Injectable({
  providedIn: RootCoreModule
})
export class TokenInterceptor {
  constructor(private authService: AuthService) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler){
  //   const clonedRequest = req.clone({
  //     setHeaders: {
  //       authorization: this.authService.getToken()
  //     }
  //   })
  // }
}
