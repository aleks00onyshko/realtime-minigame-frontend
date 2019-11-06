import { createSelector } from '@ngrx/store';

import * as fromAuthSelectors from '../../../../store/selectors';
import * as fromRegisterModels from '../../models';

export const getRegisterPending = createSelector(
  fromAuthSelectors.getRegisterState,
  (state: fromRegisterModels.RegisterState) => state.pending
);

export const getRegisterEmail = createSelector(
  fromAuthSelectors.getRegisterState,
  (state: fromRegisterModels.RegisterState) => state.email
);

export const getRegisterUsername = createSelector(
  fromAuthSelectors.getRegisterState,
  (state: fromRegisterModels.RegisterState) => state.username
);

export const getRegisterPassword = createSelector(
  fromAuthSelectors.getRegisterState,
  (state: fromRegisterModels.RegisterState) => state.password
);

export const getRegisterErrorMessage = createSelector(
  fromAuthSelectors.getRegisterState,
  (state: fromRegisterModels.RegisterState) => state.error
);
