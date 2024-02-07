import { Injectable } from '@angular/core';
import { UserToken } from './user-token.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  /**
   * Redirect to login if null is returned.
   */
  getToken(): UserToken | null {
    return {
      isAdmin: true
    }
    // return null;
  }


  setToken() {

  }

  parseToken(raw: string): UserToken {
    // Perform JWT things here.

    // Handler error thrown when raw string is malformed

    return {
      isAdmin: true
    }
  }

}
