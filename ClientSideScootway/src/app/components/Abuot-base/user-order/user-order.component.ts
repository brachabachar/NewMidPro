import { Order } from './../../../class/order';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  @Input() order:Order;
   Otime:number;
  
  constructor() { 
    this.Otime=this.order.StartDate.getTime()-this.order.EndDate.getTime();
  }

  ngOnInit(): void {
  }

}
