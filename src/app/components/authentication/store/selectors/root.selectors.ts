import { createSelector } from '@ngrx/store';

import { getRootState } from './auth.selectors';

import { RootState } from '../../models';

export const getActualUser = createSelector(
  getRootState,
  (state: RootState) => state.user
);
