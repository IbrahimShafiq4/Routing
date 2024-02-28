import { inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChildFn,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthGuardTwo: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const router = inject(Router);
  return inject(AuthService)
    .isAuthenticated()
    .then((authentication: boolean) => {
      if (authentication) {
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    });
};

export const CanActivateChildFnAuthGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | UrlTree
  | boolean => {
  // const router = inject(Router);
  // return inject(AuthService)
  //   .isAuthenticated()
  //   .then((authentication: boolean) => {
  //     if (authentication) {
  //       return true;
  //     } else {
  //       router.navigate(['/']);
  //       return false;
  //     }
  //   });

  return AuthGuardTwo(childRoute, state);
};
