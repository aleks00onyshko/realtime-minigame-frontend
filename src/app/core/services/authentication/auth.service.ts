import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootCoreModule } from '../../core.module';
import { environment } from '../../../../environments/environment';

import * as fromModels from 'models';
import * as fromConst from '../../consts';

@Injectable({ providedIn: RootCoreModule })
export class AuthService {
  constructor(@Inject(fromConst.JWT_DECODE) private jwtDecode: any, private http: HttpClient) {}

  register(email: string, username: string, password: string): Observable<fromModels.EncodedTokens> {
    return this.http.post<fromModels.EncodedTokens>(`${environment.apiUrl}/users/register`, {
      email,
      username,
      password
    });
  }

  login(email: string, password: string): Observable<fromModels.EncodedTokens> {
    return this.http.post<fromModels.EncodedTokens>(`${environment.apiUrl}/users/login`, { email, password });
  }

  decodeToken(token: string): fromModels.DecodedAccessToken {
    return this.jwtDecode(token);
  }

  setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem('refreshToken', token);
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }
}
