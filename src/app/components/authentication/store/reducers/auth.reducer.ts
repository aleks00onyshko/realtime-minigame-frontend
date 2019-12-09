import { createReducer, on } from '@ngrx/store';

import { RootState } from '../../models';
import { setActualUser } from '../actions';

export const initialState: RootState = {
  user: null
};

export const rootReducer = createReducer(
  initialState,
  on(setActualUser, (state, { user }) => ({ ...state, user }))
);
