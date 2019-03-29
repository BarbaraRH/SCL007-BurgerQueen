import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  show: any = "";

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

  constructor(private service: ConnectionService) { }

  ngOnInit() {
  }

  /* item: any = {
    name: '',
    order: [],
    cost: 0
  } */

  item: any = {
    name: '',
    order: [],
    total: 0
  }

  add(value: any) {
    this.item.name = value;
    console.log(this.item)
  }

  clickedButton(value: any, price: number) {
    (this.item.order).push({ "value": value, "cost": price });
    this.item.total += price;
  }

  sendToKitchen() {
    this.service.addItem(this.item);
    this.item.name = '';
    this.item.order = [],
      this.item.total = 0
  }

}



