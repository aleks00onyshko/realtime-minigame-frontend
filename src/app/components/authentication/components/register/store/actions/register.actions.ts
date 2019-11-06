import { createAction, props, union } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromModels from 'models';

export const register = createAction('[Auth] Register', props<{ email: string; username: string; password: string }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ tokens: fromModels.EncodedTokens }>());
export const registerFail = createAction('[Auth] Register Fail', props<{ error: HttpErrorResponse }>());
