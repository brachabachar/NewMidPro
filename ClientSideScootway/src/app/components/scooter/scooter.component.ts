import { MapList } from './../../class/base-class/mapList';
import { LocationService } from 'src/app/services/location.service';
import { Place } from 'src/app/class/base-class/place';
import { ValidatorFn } from '@angular/forms';
import { ListAdd } from './../../class/base-class/list-add';
import { List } from 'src/app/class/base-class/list';
import { EScooter } from './../../class/base-class/EScooter';
import { Scooter } from './../../class/scooter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScooterService } from 'src/app/services/scooter.service';
import { map } from "rxjs/operators";
import { Add } from 'src/app/class/base-class/add';

@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.component.html',
  styleUrls: ['./scooter.component.css']
})
export class ScooterComponent implements OnInit {

  eScooter: EScooter;
  allScooter: List = new List();//AllScooter
  addScooter: ListAdd;//AddScooter
  place: Place = new Place();
  constructor(public scooterService: ScooterService, public locationService: LocationService, private activatedRoute: ActivatedRoute
    , private router: Router) {
    this.eScooter = this.activatedRoute.snapshot.params['eScooter'];
  }

  ngOnInit(): void {
    this.CheckComponentByEnum(this.eScooter);
  }
  public get EScooter() {
    return EScooter;
  }
  CheckComponentByEnum(eScooter: EScooter) {
    switch (eScooter) {
      case EScooter.AllScooter:
        this.AllScooter();
        break;
      case EScooter.UpdatStatScooter:
        this.UpdatStatScooter(1, 2);
        break;

      case EScooter.AddScooter:
        this.AddScooter();
        break;
      case EScooter.AddNoteScooter:
        this.AddNoteScooter();
        break;
      case EScooter.AddScooterToStorage:
        this.AddScooterToStorage(1, 1);
        break;
      case EScooter.PerceptionScooter:
        this.PerceptionScooter(1);
        break;
      case EScooter.GetScooterInStreet:
        this.GetScooterInStreet();
        break;
      default:
        break;
    }
  }
  AllScooter() {
    this.locationService.getPlace().then((p: Place) => {
      this.place = p;
    });
    this.scooterService.GetAllScooters()
      .subscribe((scooter) => {
        let scooterList: Scooter[] = JSON.parse(scooter.toString());
        this.allScooter.Title = "רשימת קורקינטים";
        scooterList.forEach(x => {
          let value="";
          if(x.StorageId!=0 && x.StorageId!=null)
           value="במחסן מספר:"+x.StorageId;
          else
          value="כתובת:"+x.FullAddress;
          this.allScooter.List.push(new MapList(x.Id, " מספר:" + x.Id.toString()+",",value))
        });
      });
  }
  UpdatStatScooter(scooterId: number, state: number) {
    this.scooterService.UpdateStatusScooter(scooterId, state);
  }
  AddScooter() {
    this.router.navigate(['NewScoot', 0]);
  }
  AddNoteScooter() {

  }
  AddScooterToStorage(scooterId: number, StorageId: number) {
  }
  // PerceptionScooter(scooterId: number) {
  //   this.scooterService.UpdateStatusScooter(scooterId, 1)
  // }
  GetScooterInStreet() {
    this.locationService.getPlace().then((p: Place) => {
      this.place = p;

      this.scooterService.GetScooterInStreet(this.place)
        .subscribe((scooter) => {
          let scooterList: Scooter[] = JSON.parse(scooter.toString());
          this.allScooter.Title = "קורקינטים בסביבה";
          for (let i = 0; i < scooterList.length; i++) {
            this.allScooter.List.push(new MapList(scooterList[i].Id, "  מיקום הקורקינט: ", scooterList[i].FullAddress));
          }
        });
    });
  }
  AboutScooter(ID: number) {
    this.router.navigate(['managerScooter', ID]);
  }
  PerceptionScooter(ID: number) {
    this.router.navigate(['user-scooter', ID]);
  }

}
