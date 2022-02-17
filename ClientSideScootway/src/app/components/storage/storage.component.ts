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
  eStorage:EStorage;
  allStorage:List=new List();
  allScooter:List=new List();

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
  CheckComponentByEnum(eStorage:EStorage){
    switch (eStorage) {
      case EStorage.MyStorage:
        this.MyStorage();
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
  MyStorage(){
    this.storageService.GetAllStorages().subscribe((storage)=>{
      let storageList:Storage[]=JSON.parse(storage.toString());
      this.allStorage.Title="מחסנים שלי";
      storageList.forEach(x=> this.allStorage.List.set(x.Id," :מיקום מחסן"+x.FullAddress));
    });  
  }

  NewStorage(){

  }
  ScooterInStorage(storageId:number){
    this.scooterService.GetScootersByStorageId(storageId).subscribe((scooter)=>{
      let scooterList:Scooter[]=JSON.parse(scooter.toString());
      this.allScooter.Title="קורקינט במחסן";
      scooterList.forEach(x=> this.allScooter.List.set(x.Id," :מספר קורקינט"+x.Id));
    });
    
  }
  CountScooterInStorage(StorageId:number){
     return this.scooterService.GetCountScootersByStorageId(StorageId);
  }
  AboutStorage(){

  }
  GetStorageID(ID:number){  
    console.log(ID);  
 } 
}