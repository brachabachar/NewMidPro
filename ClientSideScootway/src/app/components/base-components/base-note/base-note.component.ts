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
  @Input() note: Note;
  @Output() objectCheck: EventEmitter<boolean> = new EventEmitter();

  description: string;
  noteForm: FormGroup;
  addNoteEnable: boolean = true;
  onSubmit: boolean = false;
  constructor(public noteService: NoteService) { }
  ngOnInit(): void {
    this.noteForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.pattern('^[A-Zא-תa-z0-9._%+-]+$'), Validators.max(300000000)])
    });
    this.CheckComponentByEnum(this.EType.typeNameId);
  }
  onFormSubmit(): void {
    this.onSubmit=true;
    this.note.Description = this.noteForm.controls["description"].value;
    this.note.CreatedById = JSON.parse(localStorage.getItem("user") ?? "").Id;
    this.noteService.AddNote(this.note).subscribe((msg) => {
      if (msg == true) {
        alert("תודה");
        this.AddNoteEnable(false);
      }
      else
        alert("שגיאה בתהליך")
    }, (error) => {
      alert(error.error);
    });;
  }
  AddNoteEnable(enable: boolean) {
    this.addNoteEnable = enable;
    this.objectCheck.emit(enable);
  }
}
