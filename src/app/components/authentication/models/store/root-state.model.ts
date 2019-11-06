import * as fromModels from 'models';

export interface RootState {
  user: fromModels.IUser | null;
}
