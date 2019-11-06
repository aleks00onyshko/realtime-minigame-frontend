import { createSelector } from '@ngrx/store';

import { getRootState } from './auth.selectors';

import * as fromAuthModels from '../../models';

export const getActualUser = createSelector(
  getRootState,
  (state: fromAuthModels.RootState) => state.user
);
