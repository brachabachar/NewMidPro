import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
import { Data } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    userService:UserService;
    mandoForm: FormGroup;
    submitted:boolean=false;
    user=new User();
    response:string;
    constructor(userS:UserService , private router: Router){
      this.userService=userS;
    }

  ngOnInit(){
    this.mandoForm= new FormGroup({
      UserId:new FormControl('',[Validators.required,Validators.min(99999999),Validators.max(999999999), Validators.pattern('^[0-9]+$')]),
      Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zא-ת ]+$'),Validators.max(15)]),
      Email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$'),Validators.max(50)]),
      Password: new FormControl(  '',[Validators.required,Validators.pattern('((?=.*[$@$!%*?&])(?=.*[0-9]).{5,10})'),Validators.max(10)]),
      Brondate: new FormControl()
    });
  } 
  onFormSubmit(){
    this.submitted=true;

    if (!this.mandoForm.valid) 
    {
       return;
    }
    else
    {
  this.user.UserId=this.mandoForm.controls["UserId"].value;
  this.user.Name=this.mandoForm.controls["Name"].value;
  this.user.Email=this.mandoForm.controls["Email"].value;
  this.user.Password=this.mandoForm.controls["Password"].value;
  this.user.BronDate=this.mandoForm.controls["Brondate"].value;
  localStorage.setItem("",this.user.UserId.toString());
  // this.userService.AddUser(this.user).subscribe( (res) =>{ 
  //   if(res!=null)
  //   {
  //     if(res!="bed")
  //     {
  //       this.userService.user=true;
  //       localStorage.setItem("user",res.toString());
  //       let element:HTMLElement=document.getElementById("link") as HTMLElement;
  //       element.click();
  //     }
  //     else{
  //       this.response= "כתובת דואר אלקרוני זו קיימת כבר במערכת";
  //       this.mandoForm.controls.Email.setValue("");
  //     }
  //   }
  // },(error)=>{alert(error.error);});
  this.userService.AddUser(this.user);    
    }
}
}
