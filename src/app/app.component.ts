import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedInState!: boolean;

  constructor(private AuthService: AuthService) {  }

  ngOnInit(): void {
    this.loggedInState = this.AuthService.loggedIn;
  }

}
