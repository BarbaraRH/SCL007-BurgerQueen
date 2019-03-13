import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})



export class AddOrderComponent implements OnInit {

  BUTTONS = [
    { order: "Café americano", cost: 500 },
    { order: "Cafe con leche", cost: 700 },
    { order: "Sandwich de jamón y queso", cost: 1000 },
    { order: "Jugo natural", cost: 700 }
  ]

  lBUTTONS = [
    { order: "Hamburguesa Simple", cost: 1500 },
    { order: "Hamburguesa Doble", cost: 2500 },
    { order: "Papas Fritas", cost: 500 },
    { order: "Onion Rings", cost: 500 },
    { order: "Agua 500 ml", cost: 1500 },
    { order: "Agua 750 ml", cost: 2500 },
    { order: "Gaseosa 500 ml", cost: 500 },
    { order: "gaseosa 750 ml", cost: 500 }
  ]


  breakfast: boolean = false;
  lunchAndDinner: boolean = false;

  item: any = {
    name: '',
    order: []
  }

  constructor(private service: ConnectionService) { }



  ngOnInit() {
  }

  add() {
    this.service.addItem(this.item);
    this.item.name = '';

  }

  clickedButton(value: any) {
    (this.item.order).push(value);
    /* this.item.order = value; */
    /* this.service.addItem(this.item);
    this.item.order = ''; */
  }

}
