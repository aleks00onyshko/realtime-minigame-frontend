import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromCore from 'core';
import * as fromModels from 'models';
import * as fromRegisterActions from '../actions';

type RegisterResponse = {
  token: string;
};

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRegisterActions.register),
      exhaustMap(action =>
        this.authService
          .register(action.email, action.username, action.password)
          .pipe(map((response: fromModels.EncodedTokens) => fromRegisterActions.registerSuccess({ tokens: response })))
      ),
      catchError(error => of(fromRegisterActions.registerFail({ error })))
    )
  );

  registerFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRegisterActions.registerFail),
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
