import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-saveform',
  templateUrl: './saveform.component.html',
  styleUrls: ['./saveform.component.css']
})
export class SaveformComponent implements OnInit {
  message : string;
  fname : string;
  constructor(private data: MessageService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message =message)
    this.data.mName.subscribe(fname => this.fname =fname)
  }

}
