import { CanActivateFn, Router } from '@angular/router';
import {  inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  try {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
  } catch (error) {
    console.error('localStorage is not available:', error);
  }

  router.navigate(['/login']);
  return false;
};
