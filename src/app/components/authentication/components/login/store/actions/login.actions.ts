import { createAction, props, union } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; publicKey: string }>()
);
export const loginFail = createAction('[Auth] Login Fail', props<{ error: HttpErrorResponse }>());
