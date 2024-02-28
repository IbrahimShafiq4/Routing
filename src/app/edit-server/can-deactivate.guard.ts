// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   CanDeactivate,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { EditServerComponent } from '../servers/edit-server/edit-server.component';

// // export interface canDeactivateComponent {
// //   canDeactivate: () =>
// //     | Observable<boolean | UrlTree>
// //     | Promise<boolean | UrlTree>
// //     | boolean
// //     | UrlTree;
// // }

// @Injectable({
//   providedIn: 'root',
// })
// export class CanDeactivateGuard
//   implements CanDeactivate<EditServerComponent>
// {
//   canDeactivate(
//     component: EditServerComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     return component.canDeactivate();
//   }
// }
