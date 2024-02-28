import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  errorMessage!: string;

  constructor(private ARoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.ARoute.snapshot.data['message'];
    this.ARoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    })
  }

}
