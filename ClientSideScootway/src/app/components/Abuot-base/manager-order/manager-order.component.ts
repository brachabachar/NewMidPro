import { List } from './../../../class/base-class/list';
import { EOrder } from './../../../class/base-class/EOrder';
import { FutureOrderService } from './../../../services/future-order.service';
import { User } from './../../../class/user';
import { UserService } from './../../../services/user.service';
import { FutureOrder } from './../../../class/future-order';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/class/note';

@Component({
  selector: 'app-manager-order',
  templateUrl: './manager-order.component.html',
  styleUrls: ['./manager-order.component.css']
})
export class ManagerOrderComponent implements OnInit {
  futureOrder: FutureOrder=new FutureOrder();
  userId:User;
  note:Note;
  addNoteEnable:boolean=true;
  
  constructor(public futureOrderService: FutureOrderService, private activatedRoute: ActivatedRoute, private router: Router) {
    futureOrderService.GetFutureOrderId(Number.parseInt(this.activatedRoute.snapshot.params['futureOrderId'])).subscribe((f) => {
      this.futureOrder = JSON.parse(f.toString());
      this.note=new Note();
      this.note.FutureOrderId=this.futureOrder.Id;
      this.note.UserId=this.futureOrder.UserId;
    });
    this.userId=JSON.parse(localStorage.getItem("user") ?? "");
  }
  ngOnInit(): void {

  }
  UpdateStatus(state:number){
    this.futureOrderService.UpdateStatusFutureOrders(this.futureOrder.Id,state).subscribe((update) => {
      if (update == true) {
        alert("אושר בהצלחה");
      }
      else
        alert("שגיאה בתהליך")
      this.router.navigate(['About']);
    },(error)=>{ alert(error.error);});
  }
  EnableButton(addNoteEnable:boolean){
    this.addNoteEnable=addNoteEnable;
  }
}
