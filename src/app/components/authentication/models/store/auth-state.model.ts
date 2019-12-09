import { RootState } from './root-state.model';

import { LoginState } from '../../components/login/models';
import { RegisterState } from '../../components/register/models';

export interface AuthState {
  root: RootState;
  login: LoginState;
  register: RegisterState;
}
