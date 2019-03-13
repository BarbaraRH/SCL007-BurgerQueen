import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-buttons',
  templateUrl: './order-buttons.component.html',
  styleUrls: ['./order-buttons.component.css']
})
export class OrderButtonsComponent implements OnInit {
  @Input() color:string;
  @Input() text:string;
  constructor() { }

  ngOnInit() {
  }

}
