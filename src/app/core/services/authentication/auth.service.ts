import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootCoreModule } from '../../core.module';
import { environment } from '../../../../environments/environment';

import { AuthResponse, DecodedToken } from 'models';
import { JWT_DECODE } from '../../consts';

@Injectable({ providedIn: RootCoreModule })
export class AuthService {
  constructor(@Inject(JWT_DECODE) private jwtDecode: any, private http: HttpClient) {}

  public register(email: string, username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/users/register`, {
      email,
      username,
      password
    });
  }

  public login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/users/login`, { email, password });
  }

  public decodeToken(token: string): DecodedToken {
    return this.jwtDecode(token);
  }

  public geToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
