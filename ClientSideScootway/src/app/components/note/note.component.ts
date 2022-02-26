import { Note } from './../../class/note';
import { List } from './../../class/base-class/list'
import { NoteService } from './../../services/note.service';
import { ENote } from './../../class/base-class/ENote';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  
   eNote:ENote;
  allNote:List=new List();
  noteList:Note[];
  u:User;
  constructor(public noteService:NoteService,private router:ActivatedRoute) {
    this.eNote=this.router.snapshot.params['eNote'];
    this.u=JSON.parse(localStorage.getItem("user")??"");
  }
   ngOnInit(): void {
    this.CheckComponentByEnum(this.eNote);
  }
  public get ENote() {
    return ENote; 
  }
  CheckComponentByEnum(eNote:ENote){
    switch (eNote) {
          case ENote.addNote:
            this.addNote();
            break;
          case ENote.allNote:
            this.AllNote();
            break;
          case ENote.noReadNote:
            this.noReadNote();
            break;
          case ENote.userNote:
            this.userNote(1);
            break;
          case ENote.GetNotesByUserIdCreat:
            this.GetNotesByUserIdCreat(this.u.Id);
            break;
          case ENote.GetNotesByUserIdFromManager:
            this.GetNotesByUserIdFromManager(this.u.Id);
            break;
          case ENote.scooterNote:
            this.scooterNote(1);
            break;
          case ENote.orderNote:
            this.orderNote(1);
            break;
          case ENote.orderNote:
            this.FutureOrderNote(1);
            break;
          case ENote.UpdateStatusNote:
            this.UpdateStatusNote();
            break;
      default:
        break;
    }
  }

  addNote(){

  }
  AllNote(){

  }  
  noReadNote(){
    this.noteService.GetNotesNoRead().subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="רשימה קורקינט";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id," :מספר קורקינט"+x.Id));
    });
  }
 
  userNote(userId:number){
    this.noteService.GetNotesByUserId(userId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id," "+x.Id));
    });
  }
  GetNotesByUserIdCreat(userId:number){
    this.noteService.GetNotesByUserIdCreat(userId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id," :מספר קורקינט"+x.Id));
    });
  }
  GetNotesByUserIdFromManager(userId:number){
    this.noteService.GetNotesByUserIdFromManager(userId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id," "+x.Description));
    });
  }
 
  scooterNote(scooterId:number){
    this.noteService.GetNotesByScooterId(scooterId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
     this.allNote.Title="";
     this.noteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
   });
  }
  orderNote(orderId: number){
    this.noteService.GetNotesByOredrId(orderId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
    });
  }
  FutureOrderNote(orderId:number){
    this.noteService.GetNotesByFutureOrderId(orderId).subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
    });
  }
  UpdateStatusNote(){

  }
  GetNoteID(ID:number){  
    console.log(ID);  
 } 


}
