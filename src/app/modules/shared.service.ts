import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private message = new BehaviorSubject('Initailize data.')
  constructor() { }

  setMessage(data:string){
    this.message.next(data);
  }

  getMessage = this.message.asObservable();
}
