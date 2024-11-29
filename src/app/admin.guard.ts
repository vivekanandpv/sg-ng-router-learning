import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map((u) => {
      if (!u || !u.roles.includes('admin')) {
        router.navigate(['unauthorized']);
        return false;
      }
      return true;
    })
  );
};
