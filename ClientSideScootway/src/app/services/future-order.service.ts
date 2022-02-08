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
    this.http.post(this.url+"AddFutureOrder",f).subscribe(x=>{});
  }
  GetFutureOrderByUserId(userId:number){
    return this.http.get(this.url+"GetAllStorages"+"userId"+userId);
  }
  GetFutureOrderId(futureOrderId:number){
    return this.http.get(this.url+"GetAllStorages"+"futureOrderId"+futureOrderId);
  }
  GetFutureOrderByUserIdByStatus(userId:number,state:number){
    return this.http.get(this.url+"GetAllStorages"+"userId"+userId+"&state"+state);
  }
  UpdateStatusFutureOrders(futureOrdersId:number,state:number){
    return this.http.get(this.url+"GetAllStorages"+"futureOrdersId"+futureOrdersId+"&state"+state);
  }
  
}
