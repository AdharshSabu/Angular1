import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  key : number =1;

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

  myFunction(){
    this.key=2;
  }

}
