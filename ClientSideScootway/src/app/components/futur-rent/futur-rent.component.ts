import { FutureOrderService } from './../../services/future-order.service';
import { FutureOrder } from './../../class/future-order';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-futur-rent',
  templateUrl: './futur-rent.component.html',
  styleUrls: ['./futur-rent.component.css']
})
export class FuturRentComponent implements OnInit {
  
  DateOrder :Date;
  LocationOrder:string; 
  Priority:number;
  CreatedOn :Date;
  StatusId :number;
  futureOrderForm: FormGroup;
  constructor(public futureOrderService:FutureOrderService) { }

  ngOnInit(): void {
    this.futureOrderForm= new FormGroup({
      DateOrder: new FormControl()
     // Priority: new FormControl()

    });
  }



}
