import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { verify } from 'jsonwebtoken';

import { RootCoreModule } from '../../core.module';
import { environment } from '../../../../environments/environment';
import { AuthResponse, DecodedToken } from 'models';

@Injectable({ providedIn: RootCoreModule })
export class AuthService {
  constructor(private jwtService: JwtHelperService, private http: HttpClient) {}

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

  public isLoggedIn(): boolean {
    const token = this.geToken();
    return this.geToken() && this.decodeToken(token) && !this.jwtService.isTokenExpired(token);
  }

  public decodeToken(token: string): DecodedToken {
    return this.jwtService.decodeToken(token);
  }

  public geToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public verifyToken(token: string, publicKey: string): DecodedToken {
    return verify(token, publicKey) as DecodedToken;
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
