import { ListAdd } from './../../../class/base-class/list-add';
import { Add } from './../../../class/base-class/add';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() listAdd:ListAdd;
  @Output() objectCheck:EventEmitter<ListAdd>= new EventEmitter();
  addForm:FormGroup;
    constructor() { }
  
    ngOnInit(): void {
      this.addForm = new FormGroup({});
      this.listAdd.List.forEach(x=>{
      this.addForm.addControl(x.Title,new FormControl('',x.ListValidator));
     }) ;
    }
    onFormSubmit(){
      this.listAdd.List.forEach(x=>{
        x.Receive=this.addForm.controls[x.Title].value;
      });
      this.objectCheck.emit(this.listAdd);
    }
 
}
