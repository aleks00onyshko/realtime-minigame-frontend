import { HttpErrorResponse } from '@angular/common/http';

export interface RegisterState {
  pending: boolean;
  email: string | null;
  username: string | null;
  password: string | null;
  error: HttpErrorResponse | null;
}
