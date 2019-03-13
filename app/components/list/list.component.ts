import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:any;

  constructor(private connection:ConnectionService) { 
    this.connection.itemList().subscribe(item=>{
      this.items = item;
    })
  }

  ngOnInit() {
  }

}
