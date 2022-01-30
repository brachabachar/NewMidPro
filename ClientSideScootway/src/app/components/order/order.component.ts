import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Orders } from '../../class/orders';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  OrderService:OrderService;
  orders:Orders;
  mandoForm:FormGroup;
   constructor(OrderService:OrderService , private router: Router)
   {
     //this.userService=userS;
   }
   ngOnInit(): void {
     this.mandoForm = new FormGroup({
        FullName:  new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת ]+$'),Validators.max(50)]),
        Email:  new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[ A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'),Validators.max(50)]),
        Address:  new FormControl('',[Validators.required, Validators.pattern('^[ A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'),Validators.max(50)]),
        NumScooter: new FormControl(),
        StartDate:  new FormControl(),
        EndDate:  new FormControl(),
        Remarks:  new FormControl('',[Validators.required, Validators.pattern('^[ A-Za-zא-ת 0-9._%+-]+$'),Validators.max(50)]),
   });
   }
   onFormSubmit(): void {
    debugger;
    this.orders.FullName=this.mandoForm.controls["FullName"].value;
    this.orders.Email=this.mandoForm.controls["Email"].value;
    this.orders.Address=this.mandoForm.controls["Address"].value;
    this.orders.NumScooter=this.mandoForm.controls["NumScooter"].value;
    this.orders.StartDate=this.mandoForm.controls["StartDate"].value;
    this.orders.EndDate=this.mandoForm.controls["EndDate"].value;
    this.orders.Remarks=this.mandoForm.controls["Remarks"].value;
    this.OrderService.Orders(this.orders).subscribe((data) => {
     
    });
  }
}
