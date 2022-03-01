import { NoteService } from './../../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { Note } from 'src/app/class/note';

@Component({
  selector: 'app-abuot-note',
  templateUrl: './abuot-note.component.html',
  styleUrls: ['./abuot-note.component.css']
})
export class AbuotNoteComponent implements OnInit {
  userId:User;
  note:Note=new Note();
  constructor(public noteService:NoteService,private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId=JSON.parse(localStorage.getItem("user") ?? "");
    noteService.GetNotesById(Number.parseInt(this.activatedRoute.snapshot.params['noteId']),this.userId.Id).subscribe((n) => {
     this.note = JSON.parse(n.toString());
    });
   }
   navigate(nav:string,id: number) {
    this.router.navigate([nav, id]);
    }
  ngOnInit(): void {
  }
  abuotPage(){
    this.router.navigate(['/Note/noReadNote']);
  }
}
