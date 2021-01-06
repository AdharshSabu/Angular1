import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  key :number =5;
  message : string;
  fname :string;
  url : string;
  items=[];
  constructor(private data: MessageService,
              private http: HttpClient) { 
                
              }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message =message)
    this.data.mName.subscribe(fname => this.fname =fname)

    if (this.message=="compact"){
      this.url='./assets/C.json';
      this.http.get(this.url).toPromise().then(data => {console.log(data);
                
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.items.push(data[key]);
          }
        }
      
      })
    }

    else if (this.message=='tower'){
      this.url='./assets/E.json';
      this.http.get(this.url).toPromise().then(data => {console.log(data);
                
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.items.push(data[key]);
          }
        }
      
      })
    }

    else if (this.message=='note book'){
      this.url='./assets/N.json';
      this.http.get(this.url).toPromise().then(data => {console.log(data);
                
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.items.push(data[key]);
          }
        }
      
      })
    }

    else if (this.message=='ultra book'){
      this.url='./assets/S.json';
      this.http.get(this.url).toPromise().then(data => {console.log(data);
                
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.items.push(data[key]);
          }
        }
      
      })
    }
  }
 
  myFunction1(){
    this.key=6;
    
  }

  getVal(item){
    this.data.userName(item.target.value);
  }
}
