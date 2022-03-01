import { Storage } from './../../class/storage';
import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/class/base-class/place';

@Component({
  selector: 'app-new-storag',
  templateUrl: './new-storag.component.html',
  styleUrls: ['./new-storag.component.css']
})
export class NewStoragComponent implements OnInit {
  newStorageForm: FormGroup;
  newStorage: Storage = new Storage();
  constructor(public storageService:StorageService, private router: Router) { 

  }

  ngOnInit(): void {
    this.newStorageForm = new FormGroup({
      name: new FormControl(),
      GoogleCoordinateX: new FormControl(),
      GoogleCoordinateY: new FormControl(),
      FullAddress: new FormControl(),
    });
  }

  onFormSubmit() {
    this.newStorage.Name= this.newStorageForm.controls["name"].value;
    this.newStorage.FullAddress = this.newStorageForm.controls["FullAddress"].value;
    this.newStorage.GoogleCoordinateX = this.newStorageForm.controls["GoogleCoordinateX"].value;
    this.newStorage.GoogleCoordinateY = this.newStorageForm.controls["GoogleCoordinateY"].value;

    this.storageService.AddStorage(this.newStorage).subscribe((created) => {
      if (created == true) {
        alert("נוצר בהצלחה");
      }
      else
        alert("שגיאה בתהליך")
      this.router.navigate(['About']);
    },(error)=>{ alert(error.error);});
  }

  GetPlace(place: Place) {
    this.newStorageForm.controls["GoogleCoordinateX"].setValue(place.GoogleCoordinateX);
    this.newStorageForm.controls["GoogleCoordinateY"].setValue(place.GoogleCoordinateY);
    this.newStorageForm.controls["FullAddress"].setValue(place.FullAddress);
  }

}
