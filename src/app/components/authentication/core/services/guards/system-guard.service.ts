import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthFacade } from 'auth/store';

@Injectable({ providedIn: 'root' })
export class SystemGuard implements CanActivate {
  constructor(public authFacade: AuthFacade) {}

  canActivate(): Observable<boolean> {
    this.authFacade.checkIfLoggedIn();

    return this.authFacade.isLoggedIn$.pipe(
      filter((isLoggedIn: boolean | null) => !!isLoggedIn),
      map((isLoggedIn: boolean) => isLoggedIn)
    );
  }
}
