import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRegisterModels from '../../models';
import * as fromRegisterSelectors from '../selectors';
import * as fromRegisterActions from '../actions';

@Injectable({ providedIn: 'root' })
export class RegisterFacade {
  pending$: Observable<boolean> = this.store.select(fromRegisterSelectors.getRegisterPending);

  constructor(private store: Store<fromRegisterModels.RegisterState>) {}

  register(email: string, username: string, password: string): void {
    this.store.dispatch(fromRegisterActions.register({ email, username, password }));
  }
}
