import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, concatMapTo } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import * as jwtDecode from 'jwt-decode';

import { environment } from 'src/environments/environment';
import { NotificationsService } from 'core';
import { User, DecodedAccessToken, Tokens } from 'models';

import {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  logout,
  checkIfLoggedIn,
  checkIfLoggedInFailure,
  checkIfLoggedInSuccess
} from '../actions';
import { AuthFacade } from '../auth.facade';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) => {
        return this.login(email, password).pipe(
          map((tokens: Tokens) => loginSuccess({ ...tokens })),
          catchError((response: HttpErrorResponse) =>
            of(loginFailure({ message: response.error.message }))
          )
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ email, password, username }) =>
        this.register(email, password, username).pipe(
          map((tokens: Tokens) => registerSuccess(tokens)),
          catchError((response: HttpErrorResponse) =>
            of(registerFailure({ message: response.error.message }))
          )
        )
      )
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, registerSuccess),
        tap(({ accessToken, refreshToken }) => {
          const { email, username } = jwtDecode(accessToken) as DecodedAccessToken;

          this.authFacade.setTokens({ accessToken, refreshToken });
          this.authFacade.setUser(new User(email, username));

          this.router.navigate(['/home']);
        })
      ),
    { dispatch: false }
  );

  authFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure, registerFailure),
        tap(action => {
          this.notificationService.showNotification(action.message);
        })
      ),
    { dispatch: false }
  );

  checkIfLoggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkIfLoggedIn),
      switchMap(() => {
        const tokens = this.authFacade.getTokens();
        const user = this.authFacade.getUser();

        if (tokens && user) {
          return this.authFacade.validateTokens(user.email, tokens).pipe(
            map((tokens: Tokens) => {
              this.authFacade.setTokens(tokens);

              return checkIfLoggedInSuccess({ user, tokens });
            }),
            catchError((error: HttpErrorResponse) => of(checkIfLoggedInFailure({ error })))
          );
        } else {
          return of(checkIfLoggedInFailure({ error: new Error('User is not logged in') }));
        }
      })
    )
  );

  checkIfLoggedInFailure$ = createEffect(() =>
    this.actions$.pipe(ofType(checkIfLoggedInFailure), concatMapTo([logout()]))
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.clear();

          this.router.navigate(['authentication/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private http: HttpClient,
    private notificationService: NotificationsService,
    private authFacade: AuthFacade
  ) {}

  private register(email: string, username: string, password: string): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/users/register`, {
      email,
      username,
      password
    });
  }

  private login(email: string, password: string): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/users/login`, {
      email,
      password
    });
  }
}
