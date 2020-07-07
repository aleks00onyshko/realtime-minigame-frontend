import { createAction, props, union } from '@ngrx/store';
import { User, Tokens } from 'models';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string; refreshToken: string }>()
);
export const loginFailure = createAction('[Auth] Login Failure', props<{ message: string }>());

export const register = createAction(
  '[Auth] Register',
  props<{ email: string; username: string; password: string }>()
);
export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ accessToken: string; refreshToken: string }>()
);
export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ message: string }>()
);

export const checkIfLoggedIn = createAction('[Auth] Check If Logged In');
export const checkIfLoggedInSuccess = createAction(
  '[Auth] Check If Logged In Success',
  props<{ user: User; tokens: Tokens }>()
);
export const checkIfLoggedInFailure = createAction(
  '[Auth] Check If Logged In Failure',
  props<{ error: any }>()
);

export const refreshAccessToken = createAction(
  '[Auth] Refresh token',
  props<{ email: string; tokens: Tokens }>()
);
export const refreshAccessTokenSuccess = createAction(
  '[Auth] Refresh token success',
  props<{ accessToken: string }>()
);
export const refreshAccessTokenFailure = createAction(
  '[Auth] Refresh token Failure',
  props<{ message: string }>()
);

export const logout = createAction('[Auth] Logout');

const all = union({
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  checkIfLoggedIn,
  checkIfLoggedInSuccess,
  checkIfLoggedInFailure,
  refreshAccessToken,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailure,
  logout
});

export type AuthActions = typeof all;
