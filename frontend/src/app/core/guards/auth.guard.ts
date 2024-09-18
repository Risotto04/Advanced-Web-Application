import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const condition = !true;

  if (condition) {
    return true; // Allow navigation
  } else {
    router.navigate(['']);
    return false;
  }
};
