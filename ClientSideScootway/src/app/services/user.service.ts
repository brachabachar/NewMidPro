import { User } from 'src/app/class/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  s:string='{"Id":1,"FirstName":"בכר","LastName":"ברכה","Email":"brachabachar@gmail.com","Password":"Bb0!@","BornDate":"2001-02-25T00:00:00","Identity":"211661830","CreatedOn":"2022-02-14T00:00:00","StatusId":1,"IsManage":false}';
  user:User= new User();
  FullName:string="";
  constructor(private http: HttpClient) {
     this.setUser(JSON.parse(localStorage.getItem("user") || 'null'));
  }
  //  url:string = "http://localhost:44394/api/User//GetUser?";
  url:string = "http://localhost:44395/api/User//";


getUser(){
  return this.user;
}
setUser(u:User){
this.user=u;
}
  
  AddUser(u:User){
    this.http.post("/api/User/AddUser",u).subscribe(x=>{});
    localStorage.setItem("user",JSON.stringify(u));
  }
  
  GetUser(userId:number){
    return this.http.get(this.url+"GetUser?"+"userId"+userId);
  }
 Login(email:string,password:string) {
    return this.http.get(this.url+"GetUserLogin?"+"email="+email+"&password="+password);
 }
  Test(){
    return this.http.get("/api/User/Test").subscribe(x => {
      console.log(x)
  });
  
  }
}
