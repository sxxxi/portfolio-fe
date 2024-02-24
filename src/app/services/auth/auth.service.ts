import { Injectable } from '@angular/core';
import { User } from '../../pages/login/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtService } from '../jwt/jwt.service';
import { UserToken } from '../jwt/user-token.model';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';
import { AuthResponse } from './auth-response.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = environment.api;
  private TOKEN_STORAGE_KEY = 'sxxxi-token';

  constructor(
    private http: HttpClient, 
    private jwt: JwtService,
    private storage: LocalStorageService,
  ) { }

  async getUser(): Promise<UserToken | null> {
    let raw = this.storage.get(this.TOKEN_STORAGE_KEY);
    if (raw) {
      return await this.jwt.parseToken(raw)
    }
    return null;
  }

  login(user: User): Observable<string> {
    return this.http.post<AuthResponse>(`${this.API}/auth/login`, user).pipe(
      map((value) => { 
        this.storage.save(this.TOKEN_STORAGE_KEY, value.token);
        return value.token;
      }
    ))
  }
}
