import { createAction, props, union } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromModels from 'models';

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ tokens: fromModels.EncodedTokens }>());
export const loginFail = createAction('[Auth] Login Fail', props<{ error: HttpErrorResponse }>());
