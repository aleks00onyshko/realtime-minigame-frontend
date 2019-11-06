import { HttpErrorResponse } from '@angular/common/http';

export interface LoginState {
  pending: boolean;
  email: string | null;
  password: string | null;
  error: HttpErrorResponse | null;
}
