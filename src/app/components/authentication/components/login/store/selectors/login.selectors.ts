import { createSelector } from '@ngrx/store';

import { getLoginState } from '../../../../store/selectors';
import { LoginState } from '../../models';

export const getLoginPending = createSelector(
  getLoginState,
  (state: LoginState) => state.pending
);

export const getLoginEmail = createSelector(
  getLoginState,
  (state: LoginState) => state.email
);

export const getLoginPassword = createSelector(
  getLoginState,
  (state: LoginState) => state.password
);

export const getLoginErrorMessage = createSelector(
  getLoginState,
  (state: LoginState) => state.error
);
