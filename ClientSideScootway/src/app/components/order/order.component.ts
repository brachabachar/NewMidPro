import { List } from '../../class/base-class/list';
import { OrderService } from './../../services/order.service';
import {Order} from './../../class/order';
import { Component, OnInit } from '@angular/core';
import { EOrder } from 'src/app/class/base-class/EOrder';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  eOrder:EOrder;
  allOrder:List=new List();
  orders:Order[];

  constructor(public orderService:OrderService,private router:ActivatedRoute) {
    this.eOrder=this.router.snapshot.params['eOrder'];
   }

  ngOnInit(): void {
    this.CheckComponentByEnum(this.eOrder);
  }
  public get EOrder() {
    return EOrder; 
  }
  CheckComponentByEnum(eOrder:EOrder){
    switch (eOrder) {
      case EOrder.ActiveOrders:
        this.ActiveOrders();
        break;
        case EOrder.NoActiveOrders:
          this.NoActiveOrders();
          break;
          case EOrder.EditOrder:
            this.EditOrder();
            break;
            case EOrder.CreateOrder:
           this.CreateOrder();
            break;
            case EOrder.waitAcceptOrder:
              this.waitAcceptOrder();
               break;
      default:
        break;
    }
  }
  ActiveOrders(){
    localStorage.getItem('Id');
    this.orderService.GetActiveOrdersByUserId(1).subscribe((orders)=>{
      let orderList:Order[]=JSON.parse(orders.toString());
      this.allOrder.Title="מחסנים שלי";
      orderList.forEach(x=> this.allOrder.List.set(x.Id," :מספר הזמנה"+x.Id));
    });  
  }
 
  NoActiveOrders(){
    this.orderService.GetNoActiveOrdersByUserId(1).subscribe((orders)=>{
      let orderList:Order[]=JSON.parse(orders.toString());
      this.allOrder.Title="הזמנות לא פעילות שלי";
      orderList.forEach(x=> this.allOrder.List.set(x.Id," :מספר הזמנה"+x.Id));
    }); 
  }
  EditOrder(){
 
  }
  CreateOrder(){

  }
  waitAcceptOrder(){
    localStorage.getItem('Id');
     this.orderService.GetOrderByStateMovedManager().subscribe((orders:Order[])=>{
      let orderList:Order[]=JSON.parse(orders.toString());
      this.allOrder.Title="הזמנות מחכות לאישור מנהל";
      orderList.forEach(x=> this.allOrder.List.set(x.Id," :מספר הזמנה"+x.Id));
    });
    
  }
  GetOrderID(ID:number){  
    console.log(ID);  
 } 

}
