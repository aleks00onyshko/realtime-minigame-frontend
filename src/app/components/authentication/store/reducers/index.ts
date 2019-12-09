import { ActionReducerMap } from '@ngrx/store';

import { rootReducer } from './auth.reducer';

import { AuthState } from '../../models';
import { loginReducer } from '../../components/login';
import { registerReducer } from '../../components/register';

export const reducers: ActionReducerMap<AuthState> = {
  root: rootReducer,
  login: loginReducer,
  register: registerReducer
};
