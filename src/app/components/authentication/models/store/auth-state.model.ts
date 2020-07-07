import { User } from 'models';

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean | null;
  refreshing: boolean;
  loading: boolean;
  error: any;
}
