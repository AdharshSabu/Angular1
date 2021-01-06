import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
//import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  private name = new BehaviorSubject<string>("default message");
  mName = this.name.asObservable();

  constructor() { }

  //url : string= "/app/json/C.json";
  //stringified :any;

  //getUsers(){
    //return this.http.get<Users>(this.url);
    //this.stringified=JSON.stringify(this.getUsers);
  //}
  

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  userName(fname: string) {
    this.name.next(fname)
  }
}
