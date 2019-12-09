import { createAction, props } from '@ngrx/store';

import { IUser } from 'models';

export const setActualUser = createAction('[Auth] Set actual user', props<{ user: IUser }>());
