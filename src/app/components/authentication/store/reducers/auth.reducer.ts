import { createReducer, on, Action } from '@ngrx/store';

import { AuthState } from '../../models';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
  logout,
  refreshAccessToken,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailure,
  checkIfLoggedIn,
  checkIfLoggedInSuccess,
  checkIfLoggedInFailure
} from '../actions';

export const initialState: AuthState = {
  userInfo: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: null,
  refreshing: false,
  loading: false,
  error: null
};

const reducer = createReducer(
  initialState,
  on(login, register, state => ({ ...state, loading: true })),
  on(loginSuccess, registerSuccess, (state, { tokens, userInfo }) => ({
    ...state,
    ...tokens,
    userInfo,
    isLoggedIn: true
  })),
  on(loginFailure, registerFailure, state => ({ ...state, loading: false })),
  on(checkIfLoggedIn, state => ({ ...state, loading: true })),
  on(checkIfLoggedInSuccess, (state, { userInfo, tokens }) => ({
    ...state,
    ...tokens,
    userInfo,
    isLoggedIn: true,
    loading: false
  })),
  on(checkIfLoggedInFailure, (state, { error }) => ({
    ...state,
    error,
    isLoggedIn: false,
    loading: false
  })),
  on(refreshAccessToken, state => ({ ...state, refreshing: true, accessToken: null })),
  on(refreshAccessTokenSuccess, (state, { tokens }) => ({
    ...state,
    ...tokens,
    refreshing: false
  })),
  on(refreshAccessTokenFailure, state => ({ ...state, refreshing: false, isLoggedIn: false })),
  on(logout, () => ({ ...initialState }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
