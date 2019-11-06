import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuthModels from '../../models';

export const getAuthenticationState = createFeatureSelector<fromAuthModels.AuthState>('authentication');
export const getRootState = createSelector(
  getAuthenticationState,
  (state: fromAuthModels.AuthState) => state.root
);
export const getRegisterState = createSelector(
  getAuthenticationState,
  (state: fromAuthModels.AuthState) => state.register
);
export const getLoginState = createSelector(
  getAuthenticationState,
  (state: fromAuthModels.AuthState) => state.login
);
