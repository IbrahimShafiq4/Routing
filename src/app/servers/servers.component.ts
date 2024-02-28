import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ServerUpdateService } from '../server-update.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];
  loggedIn!: boolean;
  isItChanged!: boolean;

  constructor(
    private serversService: ServersService,
    private Router: Router,
    private ARoute: ActivatedRoute,
    private AuthService: AuthService
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.loggedIn = this.AuthService.loggedIn;
    // console.log(this.ARoute.snapshot.queryParams);
    // console.log(this.ARoute.snapshot.fragment)
  }

  loadingProp: boolean = false;

  onReload(): void {
    this.Router.navigate(['servers'], { relativeTo: this.ARoute });
  }
}
