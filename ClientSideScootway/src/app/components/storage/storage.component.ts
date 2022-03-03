import { Scooter } from './../../class/scooter';
import { StorageService } from './../../services/storage.service';
import { Storage } from './../../class/storage';
import { EStorage } from './../../class/base-class/EStorage';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/class/base-class/list';
import { ActivatedRoute, Router } from '@angular/router';
import { ScooterService } from 'src/app/services/scooter.service';
import { MapList } from 'src/app/class/base-class/mapList';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  eStorage: EStorage;
  allStorage: List = new List();
  allScooter: List = new List();

  storage: Storage[];
  scooter: Scooter[];
  constructor(public storageService: StorageService, public scooterService: ScooterService, private activatedRoute: ActivatedRoute
    , private router: Router) {
    this.eStorage = this.activatedRoute.snapshot.params['eStorage'];
  }

  ngOnInit(): void {
    this.CheckComponentByEnum(this.eStorage);
  }
  public get EStorage() {
    return EStorage;
  }
  CheckComponentByEnum(eStorage: EStorage) {
    switch (eStorage) {
      case EStorage.MyStorage:
        this.GetAllStorage();
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
  GetAllStorage() {
    this.storageService.GetAllStorages().subscribe((storage)=>{
      let storageList:Storage[]=JSON.parse(storage.toString());
      this.allStorage.Title="מחסנים שלי";
      storageList.forEach(x=> this.allStorage.List.push(new MapList(x.Id,"שם:"+" "+x.Name+","," כתובת: "+" "+x.FullAddress)));
    });
  }


  ScooterInStorage(storageId: number) {
    this.scooterService.GetScootersByStorageId(storageId).subscribe((scooter)=>{
      let scooterList:Scooter[]=JSON.parse(scooter.toString());
      this.allScooter.Title="קורקינט במחסן";
      scooterList.forEach(x=> this.allScooter.List.push(new MapList(x.Id," :מספר קורקינט",x.Id.toString())));
    });
 
  }
  CountScooterInStorage(StorageId: number) {
    return this.scooterService.GetCountScootersByStorageId(StorageId);
  }
  AboutStorage() {

  }
  GetStorageID(ID: number) {
    console.log(ID);
  }
  AddStorage() {
    this.router.navigate(['new-storag']);
  }
  AbuotStorag(ID: number) {
    this.router.navigate(['managerStorage', ID]);
  }
}
