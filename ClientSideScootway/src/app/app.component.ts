import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userService:UserService;
  constructor(userS:UserService){
    this.userService=userS;
    this.userService.Test();
  }
  title = 'ClientSideScootway';
  userId:string="47";
  GetUser(){
    this.userService.GetUser(this.userId);
  }
}
