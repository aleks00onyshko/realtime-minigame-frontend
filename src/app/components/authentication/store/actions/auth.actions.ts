import { createAction, props } from '@ngrx/store';

import * as fromModels from 'models';

export const setActualUser = createAction('[Auth] Set actual user', props<{ user: fromModels.IUser }>());
