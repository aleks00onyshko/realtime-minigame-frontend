import { createReducer, on } from '@ngrx/store';

import * as fromAuthModels from '../../models';
import * as fromAuthActions from '../actions';

export const initialState: fromAuthModels.RootState = {
  user: null
};

export const rootReducer = createReducer(
  initialState,
  on(fromAuthActions.setActualUser, (state, { user }) => ({ ...state, user }))
);
