import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '@shared/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  let isauthenticated = inject(UserService).isAuthenticated();
  let router = inject(Router);
  console.log(isauthenticated);
  if (isauthenticated) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
