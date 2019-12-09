import { IUser } from 'models';

export interface RootState {
  user: IUser | null;
}
