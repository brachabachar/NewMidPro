import { NavbarService } from 'src/app/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { ItemNavbar } from 'src/app/class/item-navbar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NavForPreview:ItemNavbar[];
  NavForReg:ItemNavbar[];
  NavForManag:ItemNavbar[];


  user:UserService;
  constructor(private navbarService:NavbarService, private modalService: NgbModal,u:UserService,private router: Router) {
    this.NavForPreview=navbarService.NavForPreview;
    this.NavForReg=navbarService.NavForReg;
    this.NavForManag=navbarService.NavForManag;
    this.user=u;
  }

  public Registration() {
    const modalReg = this.modalService.open(RegistrationComponent)
  
  }

  ngOnInit(): void {
    
  }

}
