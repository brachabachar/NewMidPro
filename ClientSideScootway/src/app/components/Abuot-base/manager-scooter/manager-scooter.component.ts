import { Scooter } from './../../../class/scooter';
import { StorageService } from './../../../services/storage.service';
import { Storage } from './../../../class/storage';
import { Component, Input, OnInit } from '@angular/core';
import { ScooterService } from 'src/app/services/scooter.service';
import { Note } from 'src/app/class/note';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Place } from 'src/app/class/base-class/place';
import { List } from 'src/app/class/base-class/list';
import { NoteService } from 'src/app/services/note.service';
import { MapList } from 'src/app/class/base-class/mapList';

@Component({
  selector: 'app-manager-scooter',
  templateUrl: './manager-scooter.component.html',
  styleUrls: ['./manager-scooter.component.css']
})

export class ManagerScooterComponent implements OnInit {
  scooter: Scooter = new Scooter();
  note: Note;
  addNoteEnable: boolean = true;

  constructor(public scooterService: ScooterService,private noteService:NoteService, private activatedRoute: ActivatedRoute, private router: Router) {
    scooterService.GetScooterId(Number.parseInt(this.activatedRoute.snapshot.params['scooterId'])).subscribe((s) => {
      this.scooter = JSON.parse(s.toString());
      this.note = new Note();
      this.note.ScooterId = this.scooter.Id;
      this.NoteInOrder();
    });
  }
  ngOnInit(): void {
  }

  UpdateStatus(state: number) {
    this.scooterService.UpdateStatusScooter(this.scooter.Id, state).subscribe((update) => {
      if (update == true) {
        alert("אושר בהצלחה");
        this.scooter.StatusId=state;
      }
      else
        alert("שגיאה בתהליך")
      // this.router.navigate(['/Scooter/AllScooter']);
    }, (error) => { alert(error.error); });
  }
  EnableButton(addNoteEnable: boolean) {
    this.addNoteEnable = addNoteEnable;
  }
 
  
 
  public UpdatePlace(){
    this.router.navigate(['NewScoot',this.scooter.Id]);

  }

  allNote: List = new List();
  NoteInOrder(){
    this.noteService.GetNotesByScooterId(this.scooter.Id).subscribe((notes) => {
      let noteList:Note[] = JSON.parse(notes.toString());
      this.allNote.Title = "הודעות";
      noteList.forEach(x => this.allNote.List.push(new MapList(x.Id, "הודעה מס:" + x.Id )));
    });
  }
  NavigateAboutNote(ID:number){
    this.router.navigate(['AbuotNote', ID]);
  }
}
