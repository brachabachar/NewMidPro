import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  user:UserService;
  constructor(private modalService: NgbModal,u:UserService,private router: Router) {
    this.user=u;
  }

  public Registration() {
    const modalReg = this.modalService.open(RegistrationComponent)
  
  }

  ngOnInit(): void {
  }

}
