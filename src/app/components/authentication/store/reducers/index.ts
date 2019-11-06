import { ActionReducerMap } from '@ngrx/store';

import { rootReducer } from './auth.reducer';

import * as fromAuthModels from '../../models';
import * as fromLogin from '../../components/login';
import * as fromRegister from '../../components/register';

export const reducers: ActionReducerMap<fromAuthModels.AuthState> = {
  root: rootReducer,
  login: fromLogin.loginReducer,
  register: fromRegister.registerReducer
};