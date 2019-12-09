import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegisterState } from '../../models';
import { getRegisterPending } from '../selectors';
import { register } from '../actions';

@Injectable({ providedIn: 'root' })
export class RegisterFacade {
  pending$: Observable<boolean> = this.store.select(getRegisterPending);

  constructor(private store: Store<RegisterState>) {}

  register(email: string, username: string, password: string): void {
    this.store.dispatch(register({ email, username, password }));
  }
}
