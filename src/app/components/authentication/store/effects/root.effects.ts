import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

import { AuthService, NotificationsService } from 'core';
import { IUser, DecodedToken } from 'models';
import { loginSuccess } from '../../components/login/store/actions';
import { registerSuccess } from '../../components/register/store/actions';
import { setActualUser } from '../actions';
import { Action } from '@ngrx/store/src/models';

@Injectable()
export class RootEffects {
  public authSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess, registerSuccess),
      switchMap(action => {
        try {
          const decodedToken: DecodedToken = this.authService.decodeToken(action.token);

          this.authService.setToken(action.token);

          const user: IUser = {
            email: decodedToken.email,
            username: decodedToken.username,
            id: decodedToken._id
          };

          return of(setActualUser({ user }));
        } catch (error) {
          this.notificationService.showNotification('Error occured');
        }
      })
    )
  );

  public setActualUser$: Observable<boolean> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setActualUser),
        switchMap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationsService
  ) {}
}
