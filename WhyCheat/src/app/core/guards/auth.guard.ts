import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('email')) {
    return true;
  } else {
    const router = Inject(Router);
    router.navigate(['login']);
    return false;
  }
};
