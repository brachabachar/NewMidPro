import { MapList } from './../../../class/base-class/mapList';
import { List } from 'src/app/class/base-class/list';
import { Scooter } from 'src/app/class/scooter';

import { StorageService } from './../../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'src/app/class/storage';
import { ScooterService } from 'src/app/services/scooter.service';

@Component({
  selector: 'app-manager-storag',
  templateUrl: './manager-storag.component.html',
  styleUrls: ['./manager-storag.component.css']
})
export class ManagerStoragComponent implements OnInit {
  storage: Storage=new Storage();
  constructor(public scooterService: ScooterService,public storageService:StorageService, private activatedRoute: ActivatedRoute, private router: Router) {
    storageService.GetStorage(Number.parseInt(this.activatedRoute.snapshot.params['storageId'])).subscribe((s) => {
      this.storage = JSON.parse(s.toString());
      this.AllScooterInStorage();
    });
    
   }

  ngOnInit(): void {
  }
  UpdateStatus(state: number) {
    this.storageService.UpdateStatusStorages(this.storage.Id, state).subscribe((update) => {
      if (update == true) {
        alert("אושר בהצלחה");
        this.storage.StatusId=state;
      }
      else
        alert("שגיאה בתהליך")
      // this.router.navigate(['/Scooter/AllScooter']);
    }, (error) => { alert(error.error); });
  }
  allScooter: List = new List();//AllScooter
  AllScooterInStorage() {
    this.scooterService.GetScootersByStorageId(this.storage.Id)
      .subscribe((scooter) => {
        let scooterList: Scooter[] = JSON.parse(scooter.toString());
        this.allScooter.Title = "רשימת קורקינטים";
        scooterList.forEach(x => this.allScooter.List.push(new MapList(x.Id, " :מספר קורקינט" + x.Id)));
      });
  }
  NavigateAboutScooter(ID:number){
    this.router.navigate(['managerScooter', ID]);
  }
}
