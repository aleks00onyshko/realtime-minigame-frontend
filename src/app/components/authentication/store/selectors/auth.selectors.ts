import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../../models';

export const getAuthenticationState = createFeatureSelector<AuthState>('authentication');

export const getAccessToken = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.accessToken
);

export const getRefreshToken = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.refreshToken
);

export const getIsLoggedIn = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.isLoggedIn
);

export const getRefreshing = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.refreshing
);

export const getLoading = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.loading
);

export const getUser = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.user
);
