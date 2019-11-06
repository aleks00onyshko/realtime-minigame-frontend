import { createSelector } from '@ngrx/store';

import * as fromAuthSelectors from '../../../../store/selectors';
import * as fromLoginModels from '../../models';

export const getLoginPending = createSelector(
  fromAuthSelectors.getLoginState,
  (state: fromLoginModels.LoginState) => state.pending
);

export const getLoginEmail = createSelector(
  fromAuthSelectors.getLoginState,
  (state: fromLoginModels.LoginState) => state.email
);

export const getLoginPassword = createSelector(
  fromAuthSelectors.getLoginState,
  (state: fromLoginModels.LoginState) => state.password
);

export const getLoginErrorMessage = createSelector(
  fromAuthSelectors.getLoginState,
  (state: fromLoginModels.LoginState) => state.error
);
