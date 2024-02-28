import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription !: Subscription;

  constructor(private ARoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user = {
    //   id: this.ARoute.snapshot.params['id'],
    //   name: this.ARoute.snapshot.params['name']
    // }

    // this.ARoute.params.subscribe((data: {id: number, name: string})  => {
    //   this.user = {
    //     id: data.id,
    //     name: data.name
    //   }
    // })

    // this.ARoute.params
    //   .subscribe((params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //   })

    this.paramsSubscription = this.ARoute.params
      .subscribe((params: Params) => {
        this.user = {
          id: params['id'],
          name: params['name']
        }
      })

    console.log(this.ARoute.snapshot)
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
