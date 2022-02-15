import { Scooter } from './../../class/scooter';
import { StorageService } from './../../services/storage.service';
import { Storage } from './../../class/storage';
import { EStorage } from './../../class/base-class/EStorage';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/class/base-class/list';
import { ActivatedRoute } from '@angular/router';
import { ScooterService } from 'src/app/services/scooter.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  [x: string]: any;
  
  eStorage:EStorage;
  list:List;
  storage:Storage[];
  scooter:Scooter[];
  constructor(public storageService:StorageService,public scooterService:ScooterService, private router:ActivatedRoute) {
    this.eStorage=this.router.snapshot.params['eStorage'];
   }

  ngOnInit(): void {
    this.CheckComponentByEnum(this.eStorage);
  }
  public get EStorage() {
    return EStorage; 
  }
  CheckComponentByEnum(eStorage:number){
    switch (eStorage) {
      case EStorage.MySrorage:
        this.MySrorage();
      break;
      case EStorage.NewStorage:
        this.NewStorage();
      break;
      case EStorage.ScooterInStorage:
        this.ScooterInStorage(1);
      break;
      case EStorage.CountScooterInStorage:
        this.CountScooterInStorage(1);
      break;
      
      case EStorage.AboutStorage:
        this.AboutStorage();
      break;
      default:
        break;
    }
  }
  MySrorage(){
    this.storageService.GetAllStorages().subscribe((storage:Storage[])=>{
      this.storage=storage;
    });
    this.list.title="מחסנים שלי";
    this.storage.forEach(x=> this.list.list.set(x.Id," :מיקום מחסן"+x.FullAddress));
  }
  NewStorage(){

  }
  ScooterInStorage(storageId:number){
    this.scooterService.GetScootersByStorageId(storageId).subscribe((scooter:Scooter[])=>{
      this.scooter=scooter;
    });
    this.list.title="קורקינט במחסן";
    this.scooter.forEach(x=> this.list.list.set(x.Id," :מספר קורקינט"+x.Id));
  }
  CountScooterInStorage(StorageId:number){
    countScooter:Number;
    this.countScooter=this.scooterService.GetCountScootersByStorageId(StorageId);
  }
  AboutStorage(){

  }
  GetOrderID(ID:number){  
    console.log(ID);  
 } 
}
