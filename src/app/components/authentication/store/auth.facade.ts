import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { UserInfo, Tokens } from 'auth/models';
import { AuthState } from '../models';
import {
  getLoading,
  getIsLoggedIn,
  getAccessToken,
  getRefreshToken,
  getRefreshing,
  getUserInfo
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
  public userInfo$: Observable<UserInfo> = this.store.select(getUserInfo);
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

  public checkIfLoggedInSuccess(userInfo: UserInfo, tokens: Tokens): void {
    this.store.dispatch(checkIfLoggedInSuccess({ userInfo, tokens }));
  }

  public logout(): void {
    this.store.dispatch(logout());
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

  public setUserInfo(userInfo: UserInfo): void {
    localStorage.setItem('email', userInfo.email);
    localStorage.setItem('username', userInfo.username);
  }

  public getUserInfo(): UserInfo {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');

    return email && username ? { email, username } : null;
  }
}
