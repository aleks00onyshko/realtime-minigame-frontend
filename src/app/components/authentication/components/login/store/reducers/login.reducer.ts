import { createReducer, on, createSelector } from '@ngrx/store';

import { LoginState } from '../../models';
import { login, loginSuccess, loginFail } from '../actions';

const initialState: LoginState = {
  pending: false,
  email: null,
  password: null,
  error: null
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state, payload) => ({
    ...state,
    pending: true,
    email: payload.email,
    password: payload.password
  })),
  on(loginSuccess, state => ({ ...state, pending: false })),
  on(loginFail, (state, payload) => ({ ...state, pending: false, error: payload.error }))
);
