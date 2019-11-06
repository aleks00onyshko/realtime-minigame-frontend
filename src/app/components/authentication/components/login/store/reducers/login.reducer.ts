import { createReducer, on, createSelector } from '@ngrx/store';

import * as fromLoginModels from '../../models';
import * as fromLoginActions from '../actions';

const initialState: fromLoginModels.LoginState = {
  pending: false,
  email: null,
  password: null,
  error: null
};

export const loginReducer = createReducer(
  initialState,
  on(fromLoginActions.login, (state, payload) => ({
    ...state,
    pending: true,
    email: payload.email,
    password: payload.password
  })),
  on(fromLoginActions.loginSuccess, state => ({ ...state, pending: false })),
  on(fromLoginActions.loginFail, (state, payload) => ({ ...state, pending: false, error: payload.error }))
);
