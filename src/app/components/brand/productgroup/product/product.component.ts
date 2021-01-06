import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  key : number = 3;
  message : string;

  url ='./assets/L.json';
  items=[];

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
  }
  myFunction1(){
    this.key=5;
    this.data.changeMessage("note book");
  }
  myFunction2(){
    this.key=5;
    this.data.changeMessage("ultra book");
  }

}
