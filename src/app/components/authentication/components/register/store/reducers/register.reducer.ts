import { createReducer, on } from '@ngrx/store';

import * as fromRegisterModels from '../../models';
import * as fromRegisterActions from '../actions';

const initialState: fromRegisterModels.RegisterState = {
  pending: false,
  email: null,
  username: null,
  password: null,
  error: null
};

export const registerReducer = createReducer(
  initialState,
  on(fromRegisterActions.register, (state, payload) => ({
    ...state,
    pending: true,
    email: payload.email,
    username: payload.username,
    password: payload.password
  })),
  on(fromRegisterActions.registerSuccess, state => ({ ...state, pending: false })),
  on(fromRegisterActions.registerFail, (state, payload) => ({
    ...state,
    pending: false,
    error: payload.error
  }))
);
