import { Note } from './../../class/note';
import { List } from './../../class/base-class/list'
import { NoteService } from './../../services/note.service';
import { ENote } from './../../class/base-class/ENote';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  eNote:ENote;
  allNote:List=new List();
  note:Note[];
  constructor(public noteService:NoteService,private router:ActivatedRoute) {
    this.eNote=this.router.snapshot.params['eNote'];
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
    this.noteService.GetNotesNoRead().subscribe((note)=>{
      let NoteList:Note[]=JSON.parse(this.note.toString());
      this.allNote.Title="רשימה קורקינט";
      NoteList.forEach(x=> this.allNote.List.set(x.Id," :מספר קורקינט"+x.Id));
    });
  }
  userNote(userId:number){
    this.noteService.GetNotesByUserId(userId).subscribe((Note)=>{
      let NoteList:Note[]=JSON.parse(this.note.toString());
      this.allNote.Title="";
      NoteList.forEach(x=> this.allNote.List.set(x.Id," "+x.Id));
    });
  }
  
 
  scooterNote(scooterId:number){
    this.noteService.GetNotesByScooterId(scooterId).subscribe((Note)=>{
     let NoteList:Note[]=JSON.parse(this.note.toString());
     this.allNote.Title="";
     NoteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
   });
  }
  orderNote(orderId: number){
    this.noteService.GetNotesByOredrId(orderId).subscribe((Note)=>{
      let NoteList:Note[]=JSON.parse(this.note.toString());
      this.allNote.Title="";
      NoteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
    });
  }
  FutureOrderNote(orderId:number){
    this.noteService.GetNotesByFutureOrderId(orderId).subscribe((Note)=>{
      let NoteList:Note[]=JSON.parse(this.note.toString());
      this.allNote.Title="";
      NoteList.forEach(x=> this.allNote.List.set(x.Id,""+x.Id));
    });
  }
  UpdateStatusNote(){

  }
  GetNoteID(ID:number){  
    console.log(ID);  
 } 


}
