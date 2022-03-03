import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scooter } from 'src/app/class/scooter';
import { ScooterService } from 'src/app/services/scooter.service';

@Component({
  selector: 'app-user-scooter',
  templateUrl: './user-scooter.component.html',
  styleUrls: ['./user-scooter.component.css']
})
export class UserScooterComponent implements OnInit {

  scooter:Scooter=new Scooter();
  userId:number;
  constructor(public scooterService:ScooterService,private activatedRoute:ActivatedRoute,private router:Router) {
    scooterService.GetScooterId(Number.parseInt(this.activatedRoute.snapshot.params['scooterId'])).subscribe((s)=>{
      this.scooter=JSON.parse(s.toString());
      });
      this.userId=JSON.parse(localStorage.getItem("user") ?? "").Id
   }

  ngOnInit(): void {
  }
  Perception(){
    this.scooterService.UpdateScooterIsFreeAddCreatOrder(this.scooter.Id, this.userId).subscribe((checked)=>{
      if(checked==true)
         alert("נסיעה מהנה");
      else
        alert("מצטערים הקורקינט נתפס על ידי משהו אחר...\n נסה קורקינט אחר")
      this.router.navigate(['About']);
      });
  }

  // zoom: Number = 14;

  // dir :any= undefined;

  // public getDirection() {
  //   this.dir = {
  //     origin: { lat: 24.799448, lng: 120.979021 },
  //     destination: { lat: 24.799524, lng: 120.975017 }
  //   }
  // }

}
