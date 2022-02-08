import { Order } from './../class/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="/api/Order/";
  order:Order=new Order();

  constructor(private http: HttpClient) { }

  AddOrder(o:Order){
    this.http.post(this.url+"AddOrder",o).subscribe(x=>{});
  } 
  GetActiveOrdersByUserId(userId:number){
    return this.http.get(this.url+"GetAllStorages"+"userId"+userId);
  }  
  GetOrderById(orderId:number){
    return this.http.get(this.url+"GetAllStorages"+"orderId"+orderId);
  }
  UpdateStatusOrder(orderId:number, state:number){
    return this.http.get(this.url+"GetAllStorages"+"orderId"+orderId+"&state"+state);
  }
}
