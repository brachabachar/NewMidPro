import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Scooter } from 'src/app/class/scooter';
import { FormGroup, Validators } from '@angular/forms';
import { ScooterService } from 'src/app/services/scooter.service';
@Component({
  selector: 'app-new-scoot',
  templateUrl: './new-scoot.component.html',
  styleUrls: ['./new-scoot.component.css']
})
export class NewScootComponent implements OnInit {
  addScootForm: FormGroup;
  scooter:Scooter;
  scooterService:ScooterService; 
  constructor(scooterS:ScooterService , private router: Router) { 
    this.scooterService=scooterS;
  }

  ngOnInit(): void {
    this.addScootForm= new FormGroup({
      City:new FormControl(''),
      Street: new FormControl(''),
      Number: new FormControl(''),
      Isfree: new FormControl(''),
    });
  }
  onFormSubmit(){
   this.scooter.city=this.addScootForm.controls["City"].value;
   this.scooter.street=this.addScootForm.controls["Street"].value;
   this.scooter.number=this.addScootForm.controls["Number"].value;
   this.scooter.city=this.addScootForm.controls["Isfree"].value;
   this.scooterService.AddScooter(this.scooter);    

  }

}
