import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let userToken = inject(AuthService).getUser();

  if (!userToken) {
    return router.parseUrl('login');
  }

  if (!userToken.isAdmin) {
    // Send user to Azkaban;
    return router.parseUrl('azkaban');

  } else {
    return true;
  }

};
