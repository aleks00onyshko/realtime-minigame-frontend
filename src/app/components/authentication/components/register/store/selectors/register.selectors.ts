import { createSelector } from '@ngrx/store';

import { getRegisterState } from '../../../../store/selectors';
import { RegisterState } from '../../models';

export const getRegisterPending = createSelector(
  getRegisterState,
  (state: RegisterState) => state.pending
);

export const getRegisterEmail = createSelector(
  getRegisterState,
  (state: RegisterState) => state.email
);

export const getRegisterUsername = createSelector(
  getRegisterState,
  (state: RegisterState) => state.username
);

export const getRegisterPassword = createSelector(
  getRegisterState,
  (state: RegisterState) => state.password
);

export const getRegisterErrorMessage = createSelector(
  getRegisterState,
  (state: RegisterState) => state.error
);
