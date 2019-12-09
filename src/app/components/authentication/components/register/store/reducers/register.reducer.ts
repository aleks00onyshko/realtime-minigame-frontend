import { createReducer, on } from '@ngrx/store';

import { RegisterState } from '../../models';
import { register, registerSuccess, registerFail } from '../actions';

const initialState: RegisterState = {
  pending: false,
  email: null,
  username: null,
  password: null,
  error: null
};

export const registerReducer = createReducer(
  initialState,
  on(register, (state, payload) => ({
    ...state,
    pending: true,
    email: payload.email,
    username: payload.username,
    password: payload.password
  })),
  on(registerSuccess, state => ({ ...state, pending: false })),
  on(registerFail, (state, payload) => ({
    ...state,
    pending: false,
    error: payload.error
  }))
);
