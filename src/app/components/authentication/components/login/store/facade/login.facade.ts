import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { login } from '../actions';
import { getLoginPending } from '../selectors';
import { LoginState } from '../../models';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  pending$: Observable<boolean> = this.store.select(getLoginPending);

  constructor(private store: Store<LoginState>) {}

  login(email: string, password: string): void {
    this.store.dispatch(login({ email, password }));
  }
}
