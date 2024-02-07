import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Ex } from '../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  /**
   *  Retrieve user token from local storage if it exists and read the permissions attached to the claim.
   *  If found but permissions does not match => Display error messsage
   *  If token is not found, retrieve from server => Navigate to "/login"
   */
  canActivateRoute(routePermissions: string[]): boolean {
    // Get JWT here



    // Check if JWT permissions contain Ex.permissions
    let userPermissions: string[] = {
      permissions: ['create-project']
    }.permissions

    return userPermissions.every(p => routePermissions.includes(p))
  }
}
