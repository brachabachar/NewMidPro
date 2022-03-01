import { NoteService } from './../../../services/note.service';
import { List } from './../../../class/base-class/list';
import { Add } from './../../../class/base-class/add';
import { EOrder } from './../../../class/base-class/EOrder';
import { FutureOrderService } from './../../../services/future-order.service';
import { User } from './../../../class/user';
import { UserService } from './../../../services/user.service';
import { FutureOrder } from './../../../class/future-order';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/class/note';
import { MapList } from 'src/app/class/base-class/mapList';

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
  
  constructor(public futureOrderService: FutureOrderService,private noteService:NoteService
     ,private activatedRoute: ActivatedRoute, private router: Router) {
    futureOrderService.GetFutureOrderId(Number.parseInt(this.activatedRoute.snapshot.params['futureOrderId'])).subscribe((f) => {
      this.futureOrder = JSON.parse(f.toString());
      this.note=new Note();
      this.note.FutureOrderId=this.futureOrder.Id;
      this.note.UserId=this.futureOrder.UserId;
    this.NoteInOrder();
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
  allNote: List = new List();
  NoteInOrder(){
    this.noteService.GetNotesByFutureOrderId(this.futureOrder.Id).subscribe((notes) => {
      let noteList:Note[] = JSON.parse(notes.toString());
      this.allNote.Title = "הודעות";
      noteList.forEach(x => this.allNote.List.push(new MapList(x.Id, "הודעה מס:" + x.Id )));
    });
  }
  NavigateAboutNote(ID:number){
    this.router.navigate(['AbuotNote', ID]);
  }
}
