import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/class/note';

@Component({
  selector: 'app-base-note',
  templateUrl: './base-note.component.html',
  styleUrls: ['./base-note.component.css']
})
export class BaseNoteComponent implements OnInit {

  @Input() note:Note;
  @Output() objectCheck:EventEmitter<string>= new EventEmitter(); ;
    constructor() { }
  ngOnInit(): void {
  }

}
