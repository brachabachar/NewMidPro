import { User } from 'src/app/class/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User= new User();
  FullName:string="";
  constructor(private http: HttpClient) {
     this.setUser(JSON.parse(localStorage.getItem("user") || 'null'));
  }
  url:string = "/api/User/";

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
  
  GetUser(userId:string){
    return this.http.get("/api/User/GetUser?userId=47").subscribe(x => {
      return x;
  });
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
