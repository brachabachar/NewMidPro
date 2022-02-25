import { UpdateStatus } from './../class/base-class/updateStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FutureOrder } from '../class/future-order';

@Injectable({
  providedIn: 'root'
})

export class FutureOrderService {
  url:string = "/api/FutureOrder/";
 futureOrder:FutureOrder= new FutureOrder();
  constructor(private http: HttpClient) { }

  AddFutureOrder(f:FutureOrder){
    return this.http.post(this.url+"AddFutureOrder",f);
  }
  GetFutureOrderByUserId(userId:number){
    return this.http.get(this.url+"GetFutureOrderByUserId?"+"userId="+userId);
  }
  GetFutureOrderId(futureOrderId:number){
    return this.http.get(this.url+"GetFutureOrderId?"+"futureOrderId="+futureOrderId);
  }
  GetFutureOrderByUserIdByStatus(userId:number,state:number){
    return this.http.get(this.url+"GetAllStorages"+"userId"+userId+"&state"+state).subscribe(x=>{});
  }
  UpdateStatusFutureOrders(futureOrdersId:number,state:number){
    return this.http.post(this.url+"UpdateStatusFutureOrders",new UpdateStatus(futureOrdersId,state));
  }
}
