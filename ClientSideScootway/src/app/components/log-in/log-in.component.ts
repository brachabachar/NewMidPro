import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../class/user';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userService:UserService;
  user=new User();
  Email:string;
  Password:string;
  constructor() { }
  mandoForm = new FormGroup({
    Email: new FormControl(),
    Password: new FormControl()
  });
  ngOnInit(): void {

  }
  onFormSubmit(): void {
    console.log('Name:' + this.mandoForm.get('Name')?.value);
    console.log('Series:' + this.mandoForm.get('Password')?.value);}
}
