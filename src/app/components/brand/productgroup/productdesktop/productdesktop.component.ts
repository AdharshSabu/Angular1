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
  subcategories=[];
  s1=[];
  mime: string;
  renditions=[];
  format=[];
  ur=[];

  //public nameData:{id : string, name : string} = dummy;

  constructor(private data: MessageService,
              private http: HttpClient) { 
                this.http.get(this.url).toPromise().then(data => {console.log(data);
                
                  for (let key in data){
                    if (data.hasOwnProperty(key)){
                      if (key=="startingPrice"){}
                      else if(key=="media"){
                        //console.log(data[key]["icon"]["renditions"]);
                        // for (let i of data[key]){
                        //   console.log(i);
                        // }
                        this.mime=data[key]["icon"]["mime"];
                        this.renditions.push(data[key]["icon"]["renditions"]);
                      }
                      else if ( key=="subcategories"){
                        this.subcategories.push(data[key]);
                        console.log(key);
                        console.log(data[key]);
                      }
                      else {
                        this.items.push(data[key]);
                        console.log(key);
                        console.log(data[key]);
                      }
                    }
                  }
                  for (let i of this.renditions){
                    for (let j of i){
                      
                      for (let key in j){
                        if (key=="format"){
                          this.format.push(j[key]);
                          //console.log(j[key]);
                        }
                        else if (key=="url"){
                          this.ur.push(j[key]);
                          //console.log(j[key]);
                        }
                      }
                    }
                  }
            
                  for (let i of this.subcategories){
                    for (let j of i){
                      console.log(j);
                      for (let key in j){
                    
                        //if (j.hasOwnProperty(key)){
                          this.s1.push(j[key]);
                          console.log(key);
                          console.log(j[key]);
                        //}
                      }
                    }
                    //this.s1.push(data[i]);
                    //console.log(i);
                    //console.log(data[key]);
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
