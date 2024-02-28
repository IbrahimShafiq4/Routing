import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';

export interface canDeactivateComponentTwo {
  canDeactivate: () =>
    | Observable<boolean | UrlTree>
    | UrlTree
    | boolean
    | Promise<boolean | UrlTree>;
}

export const canDeactivateTwo: CanDeactivateFn<canDeactivateComponentTwo> = (
  component: canDeactivateComponentTwo,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | UrlTree
  | boolean => {
  return component.canDeactivate();
};
