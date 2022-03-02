import { Place } from 'src/app/class/base-class/place';
import { Status } from './../class/status';
import { Order } from './../class/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = "/api/Order/";
  order: Order = new Order();
  s: string = '[{"Id":16,"UserId":1,"ScooterId":3,"FutureOrderId":null,"StartDate":"2022-03-02T00:10:17.213","EndDate":"2022-03-02T00:10:17.213","StartLocation":"הרב חיים הלר 25, ירושלים, ישראל","EndLocation":"הרב חיים הלר 25, ירושלים, ישראל","CreatedOn":"2022-03-02T00:10:17.213","StatusId":1}]';
  constructor(private http: HttpClient) { }

  AddOrder(o: Order) {
    this.http.post(this.url + "AddOrder", o).subscribe(x => { });
  }
  GetActiveOrdersByUserId(userId: number) {
    return this.http.get<Order[]>(this.url + "GetActiveOrdersByUserId?" + "userId=" + userId);
  }
  GetNoActiveOrdersByUserId(userId: number) {
    return this.http.get<Order[]>(this.url + "GetNoActiveOrdersByUserId" + "userId" + userId);
  }
  GetOrderByStateMovedManager() {
    return this.http.get<Order[]>(this.url + "GetOrderByStateMovedManager");
  }
  GetOrderById(orderId: number) {
    return this.http.get(this.url + "GetOrderById?" + "orderId=" + orderId);
  }
  UpdateStatusOrder(orderId: number, state: number) {
    return this.http.get(this.url + "UpdateStatusOrder?" + "orderId=" + orderId + "&state=" + state).subscribe(x => { });;
  }
  UpdateScooterAfterOrder(orderId: number, EndLocation: Place) {
    EndLocation.orderId = orderId;
    return this.http.post(this.url + "UpdateScooterAfterOrder", EndLocation);
  }
}
