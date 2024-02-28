import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerUpdateService {
  private serverUpdateSource = new Subject<boolean>();
  serverUpdated$ = this.serverUpdateSource.asObservable();

  emitServerUpdated(isUpdated: boolean): void {
    this.serverUpdateSource.next(isUpdated);
  }

  constructor() { }
}
