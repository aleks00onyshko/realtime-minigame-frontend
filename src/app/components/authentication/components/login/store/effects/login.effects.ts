import { Injectable } from '@angular/core';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';

import { AuthResponse } from 'models';
import { login, loginSuccess, loginFail } from '../actions';
import { AuthService, NotificationsService } from 'core';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map((response: AuthResponse) =>
            loginSuccess({
              token: response.token,
              publicKey: response.publicKey
            })
          ),
          catchError(error => of(loginFail({ error })))
        )
      )
    )
  );

  loginFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFail),
        switchMap(action => {
          const errotMessage = action.error.error.message
            ? action.error.error.message
            : action.error.statusText;
          return of(this.notificationService.showNotification(errotMessage));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private notificationService: NotificationsService
  ) {}
}
