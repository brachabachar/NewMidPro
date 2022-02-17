import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemNavbar } from 'src/app/class/base-class/item-navbar';
import { Router } from '@angular/router';
import { LogInComponent } from '../../log-in/log-in.component';
import { RegistrationComponent } from '../../registration/registration.component';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rightNav:ItemNavbar[];
  leftNav:ItemNavbar[];
  @Input() nav:ItemNavbar[];
  constructor(private modalService: NgbModal,private router: Router,private navbarService:NavbarService) { 
  }
 
   test:string="Way";
  ngOnInit(): void {
    this.rightNav=this.nav.filter(x=>x.Dir==0);
    this.leftNav=this.nav.filter(x=>x.Dir==1);
  }
public Main(nameFunc:string){
  switch (nameFunc) {
    case "login":
      this.login();
      break;
    case "Registration":
      this.Registration(); 
      break;
      case "logout":
        this.logout();
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
    window.location.reload();
  }
  public null(){}


}