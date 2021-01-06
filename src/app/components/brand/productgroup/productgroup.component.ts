import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.css']
})
export class ProductgroupComponent implements OnInit {

  key : number =2;
  url ='./assets/I.json';
  items=[];

  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data => {console.log(data);
                
      for (let key in data){
        if (data.hasOwnProperty(key)){
          this.items.push(data[key]);
        }
      }
    
    })
  }

  ngOnInit(): void {
  }

  myFunction1(){
    this.key=3;
  }

  myFunction2(){
    this.key=4;
  }
}
