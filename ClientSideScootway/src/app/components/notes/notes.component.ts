import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ENote } from 'src/app/class/base-class/ENote';
import { List } from 'src/app/class/base-class/list';
import { TypeNote } from 'src/app/class/base-class/TypeNote';
import { Note } from 'src/app/class/note';
import { User } from 'src/app/class/user';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl:'./notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  eNote:ENote;
  type:TypeNote;
  allNote:List=new List();
  noteList:Note[];
  allStatus: List = new List();
  u:User;
  constructor(public noteService:NoteService,private router:ActivatedRoute,private route: Router) { 
    this.eNote=this.router.snapshot.params['eNote'];
    this.SetStatus();
  }
  SetStatus() {
    this.allStatus.Title = "סטטוסים לסינון";
    this.allStatus.List.set(1, 'פעיל');
    this.allStatus.List.set(4, 'עבר למנהל');
    this.allStatus.List.set(6, 'נקרא על ידי המנהל');
    this.allStatus.List.set(2, 'לא פעיל');
  }
  CheckComponentByEnum(eNote:ENote){   
    switch (eNote) {
          case ENote.allNote:
            this.AllNote();
            break;
            case ENote.addNote:
              this.addNote();
              break;
      default:
        break;
    }
  }
  AllNote(){
    this.noteService.GetNotesByUserIdCreat(JSON.parse(localStorage.getItem("user") ?? "").Id)
    .subscribe((notes)=>{
      this.noteList=JSON.parse(notes.toString());
      this.allNote.Title="רשימת הודעות";
      this.noteList.forEach(x=> this.allNote.List.set(x.Id," :מספר קורקינט"+x.Id));
    });}
    addNote(){
    }
public get ENote() {
  return ENote; 
}

createNewMessage(){
  this.type.typeNameId="userId";
  this.type.IdNote=JSON.parse(localStorage.getItem("user") ?? "").Id;
  this.route.navigate(['BaseNote',this.type]);
}
GetNoteID(ID:number){  
  console.log(ID);  
} 
GetStatusID(statusId: number) {
this.allNote.List.clear();
this.noteList.filter(x=>x.StatusId===statusId).forEach(x => this.allNote.List.set(x.Id, " :הזמנה מספר" + x.Id));
}
  ngOnInit(): void {
    this.CheckComponentByEnum(this.eNote);
  }

}
