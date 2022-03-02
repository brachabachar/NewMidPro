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
s:string=`[{"Id":1,"UserId":1,"DateOrder":"2022-03-02T00:00:00","LocationOrder":"Fergusson College Rd, Shivajinagar, Pune, Maharashtra, הודו","Count":2,"Priority":0,"CreatedOn":"2022-02-24T23:23:12.65","StatusId":6,"DescriptionNote":null},{"Id":2,"UserId":1,"DateOrder":"2022-02-28T00:00:00","LocationOrder":"נחמיה 20, תל אביב-יפו, ישראל","Count":20,"Priority":0,"CreatedOn":"2022-02-26T22:16:28.783","StatusId":7,"DescriptionNote":null},{"Id":3,"UserId":1,"DateOrder":"2028-06-30T00:00:00","LocationOrder":"חזנוביץ', תל אביב-יפו, ישראל","Count":12,"Priority":0,"CreatedOn":"2022-02-26T23:32:08.1","StatusId":4,"DescriptionNote":null}]`;
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
