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
    debugger;
    this.n.Description=this.noteForm.controls["description"].value;
    this.noteService.AddNote(this.n);
  }
}
