import { createAction, props, union } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const register = createAction(
  '[Auth] Register',
  props<{ email: string; username: string; password: string }>()
);
export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ token: string; publicKey: string }>()
);
export const registerFail = createAction('[Auth] Register Fail', props<{ error: HttpErrorResponse }>());
