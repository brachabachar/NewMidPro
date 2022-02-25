import { Note } from './../../class/note';
import { Place } from 'src/app/class/base-class/place';
import { FutureOrderService } from './../../services/future-order.service';
import { FutureOrder } from './../../class/future-order';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/class/user';
declare var google: any;

@Component({
  selector: 'app-futur-rent',
  templateUrl: './futur-rent.component.html',
  styleUrls: ['./futur-rent.component.css']
})
export class FuturRentComponent implements OnInit {

  futureOrderForm: FormGroup;
  futureOrder: FutureOrder = new FutureOrder();

  constructor(public futureOrderService: FutureOrderService, private router: Router) {
    this.futureOrder.UserId = JSON.parse(localStorage.getItem("user") ?? "").Id;
  }

  ngOnInit(): void {
    this.futureOrderForm = new FormGroup({
      DateOrder: new FormControl(),
      LocationOrder: new FormControl(),
      Count: new FormControl(),
      DescriptionNote: new FormControl(),
    });
  }

  onFormSubmit() {
    this.futureOrder.DateOrder = this.futureOrderForm.controls["DateOrder"].value;
    this.futureOrder.Count = this.futureOrderForm.controls["Count"].value;
    this.futureOrder.LocationOrder = this.futureOrderForm.controls["LocationOrder"].value;
    this.futureOrder.DescriptionNote = this.futureOrderForm.controls["DescriptionNote"].value;
    this.futureOrder.StatusId = 4;
    this.futureOrderService.AddFutureOrder(this.futureOrder).subscribe((FutureOrderId) => {
      if (FutureOrderId != null) {
        alert("נוצר בהצלחה");
      }
      else
        alert("שגיאה בתהליך")
      this.router.navigate(['About']);
    },(error)=>{ alert(error.error);});
  }
  GetPlace(place: Place) {
    this.futureOrderForm.controls["LocationOrder"].setValue(place.FullAddress);
  }
}
