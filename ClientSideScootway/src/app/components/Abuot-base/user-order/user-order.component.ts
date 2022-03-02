import { Note } from './../../../class/note';
import { OrderService } from './../../../services/order.service';
import { Order } from './../../../class/order';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/class/base-class/place';
import { FormControl, FormGroup } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  orderId: number;
  place: Place = new Place();
  note: Note;
  addNoteEnable: boolean = true;
  constructor(public locationService: LocationService, public orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.orderId = Number.parseInt(this.activatedRoute.snapshot.params['orderId']);
    // orderService.GetOrderById(this.orderId).subscribe((o) => {
    //   let order:Order = JSON.parse(o.toString());
    //   this.note=new Note();
    //   this.note.OrderId=order.Id;
    //   this.note.UserId=order.UserId;
    // });
    //TODO
    let order: Order = JSON.parse(orderService.s);
    this.note = new Note();
    this.note.OrderId = order.Id;
    this.note.UserId = order.UserId;
    //END TODO
  }
  ngOnInit(): void {
    this.locationService.getPlace().then((p: Place) => {
      this.place = p;
    });
  }

  updateRelease() {
    this.orderService.UpdateScooterAfterOrder(this.orderId, this.place).subscribe((o) => {
      let min = JSON.parse(o.toString());
      if (o != null) {
        alert("תודה\n הקורקינט שוחררה אחרי " + min + " דקות");
      }
      else
        alert("שגיאה בתהליך")
      this.router.navigate(['About']);
    }, (error) => {
      alert(error.error);
    });

  }
  EnableButton(addNoteEnable: boolean) {
    this.addNoteEnable = addNoteEnable;
  }
}
