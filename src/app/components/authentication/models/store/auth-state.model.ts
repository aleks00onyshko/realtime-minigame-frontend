import { UserInfo } from '../user';

export interface AuthState {
  userInfo: UserInfo | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean | null;
  refreshing: boolean;
  loading: boolean;
  error: any;
}
