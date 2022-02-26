import { StorageService } from './../../../services/storage.service';
import { Storage } from './../../../class/storage';
import { Component, Input, OnInit } from '@angular/core';
import { Scooter } from 'src/app/class/scooter';
import { ScooterService } from 'src/app/services/scooter.service';

@Component({
  selector: 'app-manager-scooter',
  templateUrl: './manager-scooter.component.html',
  styleUrls: ['./manager-scooter.component.css']
})

export class ManagerScooterComponent implements OnInit {
  @Input() storage:Storage;
  @Input() scooter:Scooter;

  scooterAdd:Scooter;
  storageAbout:Scooter;
  date:Date;
  constructor(public scooterService:ScooterService, public StorageService:StorageService) {

   }

  ngOnInit(): void {

  }

  addScooterInStorage(){
    this.date=new Date();
    this.scooterAdd.CreatedOn=this.date;
    this.scooterAdd.StorageId=this.storage.Id;
    this.scooterService.AddScooter(this.scooter);
  }

  getStorage(){
    this.StorageService.GetStorage(this.storage.Id).subscribe((s)=>{
      this.storageAbout=JSON.parse(s.toString());
    });
  }
  
}
