import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthFacade } from 'auth/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authFacade: AuthFacade, public router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authFacade.isLoggedIn$.pipe(
      map((isLoggedIn: boolean | null) => {
        if (isLoggedIn) {
          this.router.navigate(['home']);
        }

        return !isLoggedIn;
      })
    );
  }
}
