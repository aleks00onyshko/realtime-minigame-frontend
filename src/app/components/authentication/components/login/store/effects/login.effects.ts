import { Injectable } from '@angular/core';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';

import * as fromCore from 'core';
import * as fromModels from 'models';
import * as fromLoginActions from '../actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLoginActions.login),
      exhaustMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map((response: fromModels.EncodedTokens) => fromLoginActions.loginSuccess({ tokens: response })),
          catchError(error => of(fromLoginActions.loginFail({ error })))
        )
      )
    )
  );

  loginFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromLoginActions.loginFail),
        switchMap(action => {
          const errotMessage = action.error.error.message ? action.error.error.message : action.error.statusText;
          return of(this.notificationService.showNotification(errotMessage));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: fromCore.AuthService,
    private notificationService: fromCore.NotificationsService
  ) {}
}
