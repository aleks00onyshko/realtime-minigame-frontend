import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService, NotificationsService } from 'core';
import { register, registerSuccess, registerFail } from '../actions';
import { AuthResponse } from 'models';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap(action =>
        this.authService
          .register(action.email, action.username, action.password)
          .pipe(map((response: AuthResponse) => registerSuccess({ token: response.token })))
      ),
      catchError(error => of(registerFail({ error })))
    )
  );

  registerFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerFail),
        switchMap(action => {
          const errotMessage = action.error.error.message ? action.error.error.message : action.error.statusText;
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
