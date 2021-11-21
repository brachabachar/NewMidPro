import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mandoForm = new FormGroup({
    name: new FormControl(),
    series: new FormControl()
  });
  onFormSubmit(): void {
    console.log('Name:' + this.mandoForm.get('name')?.value);
    console.log('Series:' + this.mandoForm.get('series')?.value);
  }
}
