import { Injectable } from '@angular/core';
import { UserToken } from './user-token.model';
import * as jose from 'jose';
import { environment } from '../../../environments/environment.development';
import { CustomPayload } from './custom-payload.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  async parseToken(raw: string): Promise<UserToken> {
    let pubKey = await jose.importSPKI(environment.pub_key, 'RS256')
    let {payload} = await jose.jwtVerify(raw, pubKey, {
      issuer: 'Seiji Akakabe'
    })

    let cust = payload as any as CustomPayload // Ew
    let isAdmin = cust.roles.split(' ').includes('ADMIN')

    return {
      isAdmin: isAdmin
    }
  }
}
