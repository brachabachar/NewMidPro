import { List } from '../../class/base-class/list';
import { NavbarService } from 'src/app/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { ItemNavbar } from 'src/app/class/base-class/item-navbar';
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:List;
  NavForPreview:ItemNavbar[];
  NavForReg:ItemNavbar[];
  NavForManag:ItemNavbar[];
    user:User= new User();

    constructor(private navbarService:NavbarService, private modalService: NgbModal,private u:UserService,private router: Router) 
    {
    this.NavForPreview=navbarService.NavForPreview;
    this.NavForReg=navbarService.NavForReg;
    this.NavForManag=navbarService.NavForManag;
    this.user=this.u.getUser();
    }
  ngOnInit(): void {
    
  }
    
}
