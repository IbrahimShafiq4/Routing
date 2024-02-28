import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  paramsSubscription!: Subscription;
  paramsSubscriptionTwo!: Subscription;

  constructor(
    private Router: Router,
    private ARoute: ActivatedRoute,
    private AuthService: AuthService
  ) {}

  ngOnInit() {}

  onLoadServer(): void {
    this.Router.navigate(['/servers'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
      queryParamsHandling: 'preserve'
    });
  }

  logIn(): void {
    this.AuthService.login();
    this.Router.navigate(['/'], {
      relativeTo: this.ARoute,
      queryParams: { loggedIn: 'true' },
    });
  }

  logOut(): void {
    this.AuthService.logout();
    this.Router.navigate(['/'], {
      relativeTo: this.ARoute,
      queryParams: { loggedIn: 'false' },
    });
  }
}
