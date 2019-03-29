import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  items: any;

  constructor(private connection: ConnectionService) {
    this.connection.itemList().subscribe(item => {
      this.items = item;
    })
  }

  ngOnInit() {
  }



}
