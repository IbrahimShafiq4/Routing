import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { CanActivateChildFnAuthGuard } from './auth-guard.guard';
import { canDeactivateTwo } from './edit-server/can-deactivate-two.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerResolver } from './server-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users',
    children: [{ path: ':id/:name', component: UserComponent, title: 'Users' }],
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [CanActivateChildFnAuthGuard],
    component: ServersComponent,
    title: 'Servers',
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
        title: 'Server',
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [canDeactivateTwo],
        title: 'Edit-Server',
      },
    ],
  },
  // { path: 'not-found', component: NotFoundComponent, title: 'not-found' },
  // {
  //   path: 'error-page',
  //   component: PageNotFoundComponent,
  //   title: 'not-found',
  //   data: { message: 'Page Not Found!' },
  // },
  // { path: '**', component: NotFoundComponent, title: 'not-found' },
  // { path: '**', redirectTo: '/error-page', title: 'not-found' },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'not-found',
    data: { message: 'Unfortunately The Page Is Not Found!😢' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
