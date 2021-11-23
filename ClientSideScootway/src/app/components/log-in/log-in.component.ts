import { Component, OnInit , Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../class/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
    Email:  new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[ A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'),Validators.max(50)]),
    Password: new FormControl(  '',[Validators.required,Validators.pattern('((?=.*[$@$!%*?&])(?=.*[0-9]).{5,10})'),Validators.max(10)])
  });
  ngOnInit(): void {

  }
  onFormSubmit(): void {
    debugger;
    this.userService.login(this.Email,this.Password).subscribe( (data) => {
      if(data.toString()=="0"){
        alert("המשתמש לא רשום")
      }
      else if(data.toString()=="1"){
        alert("הסיסמה שגויה- הסיסמה נשלחה לדואר אלקטרוני הרשום במערכת, אנא היכנס שוב עם הסיסמה שנשלחה.")
      }
      else
      {
        this.userService.user=true;
        localStorage.setItem("user",data.toString());
        let element:HTMLElement=document.getElementById("link") as HTMLElement;
        element.click();
        
      }
    });
  }
}
