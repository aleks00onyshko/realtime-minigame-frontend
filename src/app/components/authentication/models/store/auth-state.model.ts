import { RootState } from './root-state.model';

import * as fromLoginModels from '../../components/login/models';
import * as fromRegisterModels from '../../components/register/models';

export interface AuthState {
  root: RootState;
  login: fromLoginModels.LoginState;
  register: fromRegisterModels.RegisterState;
}
