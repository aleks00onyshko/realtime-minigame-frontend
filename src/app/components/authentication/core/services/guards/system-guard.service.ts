import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { NotificationsService } from 'core';
import { Tokens } from 'models';
import { AuthFacade } from 'auth/store';

@Injectable({ providedIn: 'root' })
export class SystemGuard implements CanActivate {
  constructor(
    public router: Router,
    public authFacade: AuthFacade,
    private notificationService: NotificationsService
  ) {}

  canActivate(): Observable<boolean> {
    const tokens = this.authFacade.getTokens();
    const user = this.authFacade.getUser();

    if (tokens && user) {
      return this.authFacade.validateTokens(user.email, tokens).pipe(
        map((tokens: Tokens) => {
          this.authFacade.setTokens(tokens.accessToken, tokens.refreshToken);
          this.authFacade.checkIfLoggedInSuccess(user, tokens);
          return true;
        }),
        catchError((response: HttpErrorResponse) => {
          this.notificationService.showNotification(response.message);
          this.authFacade.logout();
          return of(false);
        })
      );
    }
  }
}
