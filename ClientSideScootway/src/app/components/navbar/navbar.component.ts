import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemNavbar } from 'src/app/class/item-navbar';
import { Router } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { RegistrationComponent } from '../registration/registration.component';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rightNav:ItemNavbar[];
  leftNav:ItemNavbar[];
  constructor(private modalService: NgbModal,private router: Router,private navbarService:NavbarService) { 

    this.rightNav=navbarService.NavForPreview.filter(x=>x.dir==0);
    this.leftNav=navbarService.NavForPreview.filter(x=>x.dir==1);
  }
 
   test:string="Way";
  ngOnInit(): void {
  }
public Main(nameFunc:string){
  switch (nameFunc) {
    case "login":
      this.login();
      break;
    case "Registration":
      this.Registration(); 
      break;   
    default:
        console.log("default");
  }
}

  public login() {
    const modalLog = this.modalService.open(LogInComponent);
  }

  public Registration() {
    const modalReg = this.modalService.open(RegistrationComponent)
  
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(['About']);
  }
  public null(){}


}
