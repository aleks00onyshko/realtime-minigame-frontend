import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { AuthFacade } from 'auth/store';
import { UserInfo } from 'auth/models';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private userInfo: UserInfo;
  private accessToken: string;
  private refreshToken: string;

  constructor(private authFacade: AuthFacade) {
    this.authFacade.accessToken$.subscribe((token: string) => (this.accessToken = token));
    this.authFacade.refreshToken$.subscribe((token: string) => (this.refreshToken = token));
    this.authFacade.userInfo$.subscribe((userInfo: UserInfo) => (this.userInfo = userInfo));
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.accessToken) {
      request = this.addToken(request, this.accessToken);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, accessToken: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: accessToken
      }
    });
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authFacade.refreshAccessToken(this.userInfo.email, {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken
    });

    return this.authFacade.accessToken$.pipe(
      filter((token: string | null) => token !== null),
      take(1),
      switchMap((token: string) => next.handle(this.addToken(request, token)))
    );
  }
}
