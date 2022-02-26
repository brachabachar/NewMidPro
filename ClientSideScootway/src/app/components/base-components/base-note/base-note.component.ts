import { User } from 'src/app/class/user';
import { Note } from './../../../class/note';
import { NoteService } from './../../../services/note.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-note',
  templateUrl: './base-note.component.html',
  styleUrls: ['./base-note.component.css']
})

export class BaseNoteComponent implements OnInit {
  @Output() objectCheck:EventEmitter<string>= new EventEmitter(); 
  description:string;
  noteForm:FormGroup;
  n:Note=new Note;
    constructor(public noteService:NoteService) { }
  ngOnInit(): void {
    this.noteForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.pattern('^[A-Zא-תa-z0-9._%+-]+$'),Validators.max(300000000)])
    });
  }
  onFormSubmit(): void {
    this.n.Description=this.noteForm.controls["description"].value;
     let u:User=new User()
     u.BornDate= new Date();
     u.Identity="208090910";
    localStorage.setItem("user",JSON.stringify(u));
    let u1:User=JSON.parse(localStorage.getItem("user")??"")
    

    localStorage.getItem("");
    localStorage.setItem("","");
    this.noteService.AddNote(this.n);
  }
}
