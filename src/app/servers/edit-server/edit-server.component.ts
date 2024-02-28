import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {
  ActivatedRoute,
  CanDeactivate,
  CanDeactivateFn,
  Params,
  Router,
  UrlTree,
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ServerUpdateService } from 'src/app/server-update.service';
import { Observable } from 'rxjs';
// import { canDeactivateComponent } from 'src/app/edit-server/can-deactivate.guard';
import { canDeactivateComponentTwo, canDeactivateTwo } from '../../edit-server/can-deactivate-two.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements canDeactivateComponentTwo, OnInit, OnDestroy
{
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changedSaved: boolean = false;

  paramsSubscriptionOne!: Subscription;
  paramsSubscriptionTwo!: Subscription;

  constructor(
    private serversService: ServersService,
    private ARoute: ActivatedRoute,
    private router: Router,
    private serverUpdateService: ServerUpdateService
  ) {}

  ngOnInit() {
    this.ARoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.ARoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });

    // console.log(this.ARoute.snapshot.params['allowEdit']);
    // console.log(this.ARouteSnapshot.params['allowEdit']);

    // console.log(`using snapshot queryParams: ${this.ARoute.snapshot.queryParams['allowEdit']}`);

    // console.log('using snapshot queryParams:', this.ARoute.snapshot.queryParams['allowEdit']);
    // console.log('using snapshot fragment:', this.ARoute.snapshot.fragment);

    // this.paramsSubscriptionOne = this.ARoute.queryParams.subscribe(
    //   (params: Params) => {
    //     console.log(`using subscribe ${params['allowEdit']}`);
    //   }
    // );

    // this.paramsSubscriptionTwo = this.ARoute.fragment.subscribe(
    //   (fragment: string) => {
    //     console.log(`using subscribe ${fragment}`);
    //   }
    // );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changedSaved = true;
    this.router.navigate(['../'], { relativeTo: this.ARoute });
    this.serverUpdateService.emitServerUpdated(true);
  }

  ngOnDestroy(): void {
    // this.paramsSubscriptionOne.unsubscribe();
    // this.paramsSubscriptionTwo.unsubscribe();
  }

  canDeactivate(): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changedSaved
    ) {
      return confirm('Do You want to Discard The Changes ?');
    } else {
      return true;
    }
  }

  // canDeactivate(): Observable<boolean | UrlTree>
  // | Promise<boolean | UrlTree>
  // | boolean
  // | UrlTree {
  //   return true
  // }
}
