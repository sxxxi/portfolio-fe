import { Injectable } from '@angular/core';
import { User } from '../../pages/login/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtService } from '../jwt/jwt.service';
import { UserToken } from '../jwt/user-token.model';
import { Observable, map, throwError } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:8080';
  private TOKEN_STORAGE_KEY = 'sxxxi-token';

  constructor(
    private http: HttpClient, 
    private jwt: JwtService,
    private storage: LocalStorageService,
  ) { }

  getUser(): UserToken | null {
    let raw = this.storage.get(this.TOKEN_STORAGE_KEY);
    
    if (raw) {
      return this.jwt.parseToken(raw)
    }

    return { isAdmin: true };
  }

  login(user: User): Observable<string> {
    return this.http.put<string>(`${this.API}/auth/login`, user).pipe(
      map((value) => { 
        this.storage.save(this.TOKEN_STORAGE_KEY, value);
        return value;
      }
    ))
  }
}
