import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { RootCoreModule } from '../../core.module';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: RootCoreModule
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      request.clone({
        params: request.params.set('token', this.authService.geToken())
      });
    } else {
      this.authService.logout();
    }

    return next.handle(request);
  }
}
