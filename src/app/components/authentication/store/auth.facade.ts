import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User, Tokens } from 'models';
import { AuthState } from '../models';
import {
  getLoading,
  getIsLoggedIn,
  getAccessToken,
  getRefreshToken,
  getRefreshing,
  getUser
} from './selectors';
import {
  login,
  register,
  logout,
  refreshAccessToken,
  checkIfLoggedInSuccess,
  checkIfLoggedIn
} from './actions';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  public user$: Observable<User> = this.store.select(getUser);
  public isLoggedIn$: Observable<boolean> = this.store.select(getIsLoggedIn);
  public accessToken$: Observable<string> = this.store.select(getAccessToken);
  public refreshToken$: Observable<string> = this.store.select(getRefreshToken);
  public loading$: Observable<boolean> = this.store.select(getLoading);
  public refreshing$: Observable<boolean> = this.store.select(getRefreshing);

  constructor(private store: Store<AuthState>, private http: HttpClient) {}

  public register(email: string, username: string, password: string): void {
    this.store.dispatch(register({ email, username, password }));
  }

  public login(email: string, password: string): void {
    this.store.dispatch(login({ email, password }));
  }

  public refreshAccessToken(email: string, tokens: Tokens): void {
    this.store.dispatch(refreshAccessToken({ email, tokens }));
  }

  public checkIfLoggedIn(): void {
    this.store.dispatch(checkIfLoggedIn());
  }

  public checkIfLoggedInSuccess(user: User, tokens: Tokens): void {
    this.store.dispatch(checkIfLoggedInSuccess({ user, tokens }));
  }

  public logout(): void {
    this.store.dispatch(logout());
  }

  public validateTokens(email: string, tokens: Tokens): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.apiUrl}/users/token`, {
      email,
      ...tokens
    });
  }

  public setTokens(tokens: Tokens): void {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  public getTokens(): Tokens {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return accessToken && refreshToken ? { accessToken, refreshToken } : null;
  }

  public setUser(user: User): void {
    localStorage.setItem('email', user.email);
    localStorage.setItem('username', user.username);
  }

  public getUser(): User {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');

    return email && username ? new User(email, username) : null;
  }
}
