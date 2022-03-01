import { User } from 'src/app/class/user';
import { Note } from './../../../class/note';
import { NoteService } from './../../../services/note.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeNote } from 'src/app/class/base-class/TypeNote';


@Component({
  selector: 'app-base-note',
  templateUrl: './base-note.component.html',
  styleUrls: ['./base-note.component.css']
})

export class BaseNoteComponent implements OnInit {
  EType:TypeNote;
  @Output() objectCheck:EventEmitter<string>= new EventEmitter(); 
  description:string;
  noteForm:FormGroup;
  userId:User;
  n:Note=new Note;
    constructor(public noteService:NoteService,private activatedRoute: ActivatedRoute
      , private router: Router) {
      
      this.EType = this.activatedRoute.snapshot.params['EType'];
      this.userId.Id = JSON.parse(localStorage.getItem("user") ?? "").Id;
    }
  ngOnInit(): void {
    this.noteForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.pattern('^[A-Zא-תa-z0-9._%+-]+$'),Validators.max(300000000)])
    });
    this.CheckComponentByEnum(this.EType.typeNameId);
  }
  onFormSubmit(): void {
    this.n.Description=this.noteForm.controls["description"].value;
    this.noteService.AddNote(this.n);
  }
  CheckComponentByEnum(type: string) {
    switch (type) {
      case "userId":
        this.creatUser();
      break;
      case "scooterId":
        this.creatScooter();
      break;
      
      default:
        break;
    }
  }
  creatUser(){
    this.n.Description=this.noteForm.controls["description"].value;
    this.n.UserId=this.EType.IdNote;
    this.noteService.AddNote(this.n);
  }
  creatScooter(){
    this.n.Description=this.noteForm.controls["description"].value;
    this.n.ScooterId=this.EType.IdNote;
    this.noteService.AddNote(this.n);
  }
}
