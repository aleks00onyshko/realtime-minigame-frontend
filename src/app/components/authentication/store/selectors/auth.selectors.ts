import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../../models';

export const getAuthenticationState = createFeatureSelector<AuthState>('authentication');
export const getRootState = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.root
);
export const getRegisterState = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.register
);
export const getLoginState = createSelector(
  getAuthenticationState,
  (state: AuthState) => state.login
);
