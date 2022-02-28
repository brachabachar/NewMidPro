
import { StorageService } from './../../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'src/app/class/storage';

@Component({
  selector: 'app-manager-storag',
  templateUrl: './manager-storag.component.html',
  styleUrls: ['./manager-storag.component.css']
})
export class ManagerStoragComponent implements OnInit {
  storage: Storage=new Storage();
  constructor(public storageService:StorageService, private activatedRoute: ActivatedRoute, private router: Router) {
    storageService.GetStorage(Number.parseInt(this.activatedRoute.snapshot.params['storageId'])).subscribe((s) => {
      this.storage = JSON.parse(s.toString());
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
}
