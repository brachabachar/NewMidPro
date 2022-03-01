import { MapList } from './../../class/base-class/mapList';
import { List } from '../../class/base-class/list';
import { OrderService } from './../../services/order.service';
import { Order } from './../../class/order';
import { Component, OnInit } from '@angular/core';
import { EOrder } from 'src/app/class/base-class/EOrder';
import { ActivatedRoute, Router } from '@angular/router';
import { FutureOrder } from 'src/app/class/future-order';
import { FutureOrderService } from 'src/app/services/future-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  eOrder: EOrder;
  allOrders: List = new List();
  allStatus: List = new List();
  orderList:FutureOrder[];

  allOrdersActive: List = new List();
  constructor(public futureOrderService: FutureOrderService,public orderService:OrderService, private activatedRoute: ActivatedRoute
    , private router: Router) {
    this.eOrder = this.activatedRoute.snapshot.params['eOrder'];
    this.SetStatus();
  }
  SetStatus() {
    this.allStatus.Title = "סטטוסים לסינון";
    this.allStatus.List.push(new MapList( 1, 'פעיל'));
    this.allStatus.List.push(new MapList(4, 'עבר למנהל'));
    this.allStatus.List.push(new MapList(6, 'אושר על ידי המנהל'));
    this.allStatus.List.push(new MapList(7, 'המנהל דחה'));
    this.allStatus.List.push(new MapList(2, 'לא פעיל'));
  }
  ngOnInit(): void {
    this.CheckComponentByEnum(this.eOrder);
  }
  public get EOrder() {
    return EOrder;
  }
  CheckComponentByEnum(eOrder: EOrder) {
    switch (eOrder) {
      case EOrder.AllOrders:
        this.AllOrders();
      break;
      case EOrder.AllOrdersActiveUser:
        this.AllOrdersActiveUser();
      break;
      default:
        break;
    }
  }
  AllOrders() {
    this.futureOrderService.GetFutureOrderByUserId(JSON.parse(localStorage.getItem("user") ?? "").Id)
      .subscribe((futureOrder) => {
        this.orderList = JSON.parse(futureOrder.toString());
        this.allOrders.Title = "רשימת הזמנות עתידיות ";
        this.orderList.forEach(x => this.allOrders.List.push(new MapList(x.Id, " :הזמנה מספר" + x.Id)));
      });  
  }
  AllOrdersActiveUser() {
    this.orderService.GetActiveOrdersByUserId(JSON.parse(localStorage.getItem("user") ?? "").Id)
    .subscribe((order) => {
      this.orderList = JSON.parse(order.toString());
      this.orderList.forEach(x => this.allOrdersActive.List.push(new MapList(x.Id, " :הזמנה מספר" + x.Id)));
    });
  }
  GetOrderID(ID: number) {
    this.router.navigate(['managerOrder', ID]);
  }
  GetOrderActiveID(ID: number) {
  this.router.navigate(['userOrder', ID]);
  }
  GetStatusID(statusId: number) {
    this.allOrders.List=[];
    this.orderList.filter(x=>x.StatusId===statusId).forEach(x => this.allOrders.List.push(new MapList(x.Id, " :הזמנה מספר" + x.Id)));
  }

}
