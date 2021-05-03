import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from 'auth/models';
import { RouterStateUrl } from 'store';

export interface RootState {
  router: RouterReducerState<RouterStateUrl>;
  authentication: AuthState;
}
