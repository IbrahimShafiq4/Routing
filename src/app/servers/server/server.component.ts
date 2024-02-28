import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  ActivatedRouteSnapshot,
  Data,
} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private ARoute: ActivatedRoute,
    private Router: Router,
  ) {}

  ngOnInit() {
    // this.ARoute.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.ARoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    })
  }

  onEdit() {
    // this.Router.navigate([`/servers/${this.serverId}/edit`])
    // this.Router.navigate(['/servers', this.server.id, 'edit'])

    // this.Router.navigate(['edit'], {
    //   relativeTo: this.ARoute,
    // });
    console.log('hello');
    this.Router.navigate(['edit'], {
      relativeTo: this.ARoute,
      queryParamsHandling: 'preserve',
    });
    console.log(this.ARoute.snapshot);
  }
}