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

  subcategories=[];
  s1=[];
  mime: string;
  renditions=[];
  format=[];
  ur=[];
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

    else if (this.message=='tower'){
      this.url='./assets/E.json';
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

    else if (this.message=='note book'){
      this.url='./assets/N.json';
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

    else if (this.message=='ultra book'){
      this.url='./assets/S.json';
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
  }
 
  myFunction1(){
    this.key=6;
    
  }

  getVal(item){
    this.data.userName(item.target.value);
  }
}
