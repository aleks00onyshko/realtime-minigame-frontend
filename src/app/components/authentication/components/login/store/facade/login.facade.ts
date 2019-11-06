import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLoginActions from '../actions';
import * as fromLoginSelectors from '../selectors';
import * as fromLoginModels from '../../models';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  pending$: Observable<boolean> = this.store.select(fromLoginSelectors.getLoginPending);

  constructor(private store: Store<fromLoginModels.LoginState>) {}

  login(email: string, password: string): void {
    this.store.dispatch(fromLoginActions.login({ email, password }));
  }
}
