import { Tokens } from './token.model';
import { User } from './user.model';

export interface AuthResponse {
  tokens: Tokens;
  user: User;
}
