import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
//import { Users } from 'src/app/users';
//import dummy from './assets/dummy.json';

@Component({
  selector: 'app-productdesktop',
  templateUrl: './productdesktop.component.html',
  styleUrls: ['./productdesktop.component.css']
})
export class ProductdesktopComponent implements OnInit {
  key : number= 4;
  message : string;
  //new : Users;
  url ='./assets/D.json';
  items=[];

  //public nameData:{id : string, name : string} = dummy;

  constructor(private data: MessageService,
              private http: HttpClient) { 
                this.http.get(this.url).toPromise().then(data => {console.log(data);
                
                  for (let key in data){
                    if (data.hasOwnProperty(key)){
                      this.items.push(data[key]);
                    }
                  }
                
                })
              }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message =message)
    //this.data.getUsers().subscribe(response => this.new= response)
  }
  myFunction1(){
    this.key=5;
    this.data.changeMessage("compact");
  }
  myFunction2(){
    this.key=5;
    this.data.changeMessage("tower");
  }
}
