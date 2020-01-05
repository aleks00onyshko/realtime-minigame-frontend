import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { RootCoreModule } from '../../../core.module';

@Injectable({ providedIn: RootCoreModule })
export class SystemGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['authentication/login']);
      return false;
    }

    return true;
  }
}
