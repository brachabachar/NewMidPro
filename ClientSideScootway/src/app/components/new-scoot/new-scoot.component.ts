import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Scooter } from 'src/app/class/scooter';
import { FormGroup, Validators } from '@angular/forms';
import { ScooterService } from 'src/app/services/scooter.service';
import { Place } from 'src/app/class/base-class/place';
@Component({
  selector: 'app-new-scoot',
  templateUrl: './new-scoot.component.html',
  styleUrls: ['./new-scoot.component.css']
})
export class NewScootComponent implements OnInit {
  newScootForm: FormGroup;
  newScoot: Scooter = new Scooter();
  public inStorage: number;
  but:boolean=false;
  constructor(public scooterService: ScooterService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.newScoot.Id = Number.parseInt(this.activatedRoute.snapshot.params['scooterId']);
  }

  ngOnInit(): void {
    this.newScootForm = new FormGroup({
      GoogleCoordinateX: new FormControl(),
      GoogleCoordinateY: new FormControl(),
      FullAddress: new FormControl(),
      StorageId: new FormControl(),
    });
  }

  onFormSubmit() {
    this.newScoot.IsFree = true;
    this.newScoot.GoogleCoordinateX = this.newScootForm.controls["GoogleCoordinateX"].value;
    this.newScoot.GoogleCoordinateY = this.newScootForm.controls["GoogleCoordinateY"].value;
    this.newScoot.FullAddress = this.newScootForm.controls["FullAddress"].value;
    this.newScoot.StorageId = this.newScootForm.controls["StorageId"].value;
    this.scooterService.AddOrUpdateScooter(this.newScoot).subscribe((created) => {
      if (created == true) {
        alert("התהליך הצליח");
      }
      else
        alert("שגיאה בתהליך")
      this.router.navigate(['About']);
    }, (error) => { alert(error.error); });
  }
  GetPlace(place: Place) {
    this.but=true;
    this.newScootForm.controls["GoogleCoordinateX"].setValue(place.GoogleCoordinateX);
    this.newScootForm.controls["GoogleCoordinateY"].setValue(place.GoogleCoordinateY);
    this.newScootForm.controls["FullAddress"].setValue(place.FullAddress);
    this.newScootForm.controls["StorageId"].setValue(null);
  }
  SetStorage(storageId: number) {
    this.but=true;
    this.newScootForm.controls["StorageId"].setValue(storageId);
    this.newScootForm.controls["GoogleCoordinateX"].setValue(null);
    this.newScootForm.controls["GoogleCoordinateY"].setValue(null);
    this.newScootForm.controls["FullAddress"].setValue(null);
  }
  public SetContent(set: number) {
    this.inStorage = set;
  }

}
