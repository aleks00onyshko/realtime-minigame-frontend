import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, mapTo } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NotificationsService } from 'core';
import { Tokens, UserInfo } from 'auth/models';

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
  checkIfLoggedInSuccess,
  refreshAccessToken,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailure
} from '../actions';
import { AuthFacade } from '../auth.facade';

interface AuthResponse {
  tokens: Tokens;
  userInfo: UserInfo;
}

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) => {
        return this.login(email, password).pipe(
          map(({ tokens, userInfo }) => loginSuccess({ tokens, userInfo })),
          catchError((response: HttpErrorResponse) =>
            of(loginFailure({ error: response.error.message }))
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
          map(({ tokens, userInfo }) => registerSuccess({ tokens, userInfo })),
          catchError((response: HttpErrorResponse) =>
            of(registerFailure({ error: response.error.message }))
          )
        )
      )
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, registerSuccess),
        tap(({ tokens, userInfo }) => {
          this.authFacade.setTokens(tokens);
          this.authFacade.setUserInfo(userInfo);

          this.router.navigate(['/home']);
        })
      ),
    { dispatch: false }
  );

  authFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure, registerFailure),
        tap(({ error }) => this.notificationService.showNotification(error))
      ),
    { dispatch: false }
  );

  checkIfLoggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkIfLoggedIn),
      switchMap(() => {
        const tokens = this.authFacade.getTokens();
        const userInfo = this.authFacade.getUserInfo();

        if (tokens && userInfo) {
          return this.validateTokens(userInfo.email, tokens).pipe(
            map((tokens: Tokens) => checkIfLoggedInSuccess({ userInfo, tokens })),
            catchError((error: HttpErrorResponse) =>
              of(checkIfLoggedInFailure({ error: error.message }))
            )
          );
        } else {
          return of(checkIfLoggedInFailure({ error: 'User is not logged in!' }));
        }
      })
    )
  );

  checkIfLoggedInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(checkIfLoggedInSuccess),
        tap(({ tokens, userInfo }) => {
          this.authFacade.setTokens(tokens);
          this.authFacade.setUserInfo(userInfo);
        })
      ),
    { dispatch: false }
  );

  checkIfLoggedInFailure$ = createEffect(() =>
    this.actions$.pipe(ofType(checkIfLoggedInFailure), mapTo(logout()))
  );

  refreshAccessToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshAccessToken),
      switchMap(({ email, tokens }) => {
        return this.validateTokens(email, tokens).pipe(
          map((tokens: Tokens) => refreshAccessTokenSuccess({ tokens })),
          catchError((error: HttpErrorResponse) =>
            of(refreshAccessTokenFailure({ error: error.message }))
          )
        );
      })
    )
  );

  refreshAccessTokenSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(refreshAccessTokenSuccess),
        tap(({ tokens }) => this.authFacade.setTokens(tokens))
      ),
    { dispatch: false }
  );

  refreshAccessTokenFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(refreshAccessTokenFailure),
        tap(({ error }) => this.notificationService.showNotification(error))
      ),
    { dispatch: false }
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

  private register(
    email: string,
    username: string,
    password: string
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/users/register`, {
      email,
      username,
      password
    });
  }

  private login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/users/login`, {
      email,
      password
    });
  }

  private validateTokens(email: string, tokens: Tokens): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/users/token`, {
      email,
      ...tokens
    });
  }
}
