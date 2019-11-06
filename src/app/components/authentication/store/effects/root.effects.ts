import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import * as fromCore from 'core';
import * as fromModels from 'models';
import * as fromLoginActions from '../../components/login/store/actions';
import * as fromRegisterActions from '../../components/register/store/actions';
import * as fromRootActions from '../actions';

@Injectable()
export class RootEffects {
  authSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLoginActions.loginSuccess, fromRegisterActions.registerSuccess),
      switchMap(action => {
        try {
          const decodedAccessToken = this.authService.decodeToken(action.tokens.accessToken);

          this.authService.setAccessToken(action.tokens.accessToken);
          this.authService.setRefreshToken(action.tokens.refreshToken);

          const user: fromModels.IUser = {
            email: decodedAccessToken.email,
            username: decodedAccessToken.username,
            id: decodedAccessToken._id
          };

          return of(fromRootActions.setActualUser({ user }));
        } catch (error) {
          this.notificationService.showNotification('Error occured');
        }
      })
    )
  );

  setActualUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRootActions.setActualUser),
        switchMap(action => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: fromCore.AuthService,
    private notificationService: fromCore.NotificationsService
  ) {}
}
