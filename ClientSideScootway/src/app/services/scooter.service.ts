import { Place } from 'src/app/class/base-class/place';
import { Scooter } from './../class/scooter';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateStatus } from '../class/base-class/updateStatus';

@Injectable({
  providedIn: 'root'
})

export class ScooterService {
  url: string = "/api/Scooter/";
  scooter: Scooter = new Scooter();
  //TODO
  s:string='[{"Id":1,"GoogleCoordinateX":0.0,"GoogleCoordinateY":0.0,"FullAddress":null,"IsFree":false,"StorageId":1,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":2,"GoogleCoordinateX":0.0,"GoogleCoordinateY":0.0,"FullAddress":null,"IsFree":false,"StorageId":1,"CreatedOn":"2022-02-16T00:00:00","StatusId":1},{"Id":3,"GoogleCoordinateX":31.7652992,"GoogleCoordinateY":35.1993856,"FullAddress":"הרב חיים הלר 25, ירושלים, ישראל","IsFree":false,"StorageId":0,"CreatedOn":"2022-02-17T00:00:00","StatusId":1},{"Id":4,"GoogleCoordinateX":32.0852999,"GoogleCoordinateY":34.7817676,"FullAddress":"15, מלכי ישראל, תל אביב-יפו, ישראל","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-18T00:00:00","StatusId":2},{"Id":5,"GoogleCoordinateX":32.071912,"GoogleCoordinateY":34.781038,"FullAddress":"ברכה פולד, תל אביב-יפו, ישראל","IsFree":false,"StorageId":0,"CreatedOn":"2022-02-19T00:00:00","StatusId":2},{"Id":6,"GoogleCoordinateX":0.0,"GoogleCoordinateY":0.0,"FullAddress":null,"IsFree":false,"StorageId":1,"CreatedOn":"2022-02-19T00:00:00","StatusId":3},{"Id":11,"GoogleCoordinateX":0.0,"GoogleCoordinateY":0.0,"FullAddress":null,"IsFree":false,"StorageId":1,"CreatedOn":"2022-02-25T01:34:52.023","StatusId":1},{"Id":19,"GoogleCoordinateX":32.077494362585504,"GoogleCoordinateY":34.836585742826038,"FullAddress":"עזרא 50 בני ברק","IsFree":false,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":20,"GoogleCoordinateX":32.078309233940452,"GoogleCoordinateY":34.833647544678534,"FullAddress":"חזון איש 60 בני ברק","IsFree":false,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":21,"GoogleCoordinateX":32.082642469299806,"GoogleCoordinateY":34.840936117695072,"FullAddress":"הרב כהנמן 64 בני ברק ","IsFree":false,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":22,"GoogleCoordinateX":32.0936995,"GoogleCoordinateY":34.8387577,"FullAddress":"אוסישקין 13, בני ברק, ישראל","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":23,"GoogleCoordinateX":32.079335704417375,"GoogleCoordinateY":34.837423815842591,"FullAddress":"נחמיה/עזרא בני ברק","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":24,"GoogleCoordinateX":32.077494362585504,"GoogleCoordinateY":34.836585742826038,"FullAddress":"עזרא 50 בני ברק","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":25,"GoogleCoordinateX":32.078309233940452,"GoogleCoordinateY":34.833647544678534,"FullAddress":"חזון איש 60 בני ברק","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":26,"GoogleCoordinateX":32.082642469299806,"GoogleCoordinateY":34.840936117695072,"FullAddress":"הרב כהנמן 64 בני ברק ","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":27,"GoogleCoordinateX":31.7652992,"GoogleCoordinateY":35.1993856,"FullAddress":"הרב חיים הלר 25, ירושלים, ישראל","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":28,"GoogleCoordinateX":32.077494362585504,"GoogleCoordinateY":34.836585742826038,"FullAddress":"עזרא 50 בני ברק","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":29,"GoogleCoordinateX":32.078309233940452,"GoogleCoordinateY":34.833647544678534,"FullAddress":"חזון איש 60 בני ברק","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1},{"Id":30,"GoogleCoordinateX":32.082642469299806,"GoogleCoordinateY":34.840936117695072,"FullAddress":"הרב כהנמן 64 בני ברק ","IsFree":true,"StorageId":0,"CreatedOn":"2022-02-15T00:00:00","StatusId":1}]';
  //END TODO
  constructor(private http: HttpClient) { }
  AddOrUpdateScooter(s: Scooter) {
    if (s.Id == 0)
      return this.AddScooter(s);
    else
      return this.UpdatePlaceScooter(s);
  }
  UpdatePlaceScooter(s: Scooter) {
    return this.http.post(this.url + "UpdatePlaceScooter", s);
  }
  AddScooter(s: Scooter) {
    return this.http.post(this.url + "AddScooter", s);
  }
  GetAllScooters() {
    return this.http.get(this.url + "GetAllScooters");
  }
  GetScooterId(scooterId: number) {
    return this.http.get(this.url + "GetScooterId?" + "scooterId=" + scooterId);
  }
  GetScootersByStorageId(StorageId: number) {
    return this.http.get(this.url + "GetScootersByStorageId?" + "storageId=" + StorageId);
  }
  GetCountScootersByStorageId(StorageId: number) {
    return this.http.get(this.url + "GetCountScootersByStorageId?" + "StorageId=" + StorageId).subscribe(x => { });
  }
  GetScooterInStreet(place:Place) {
    return this.http.post(this.url + "GetScooterInStreet",place);
  }
  GetScooterIsFreeInStreet(place:Place) {
    return this.http.get(this.url + "GetScooterIsFreeInStreet?"+"place="+place);
  }
  UpdateStatusScooter(scooterId: number, state: number) {
    return this.http.post(this.url + "UpdateStatusScooter", new UpdateStatus(scooterId, state));
  }
  UpdateStorageId(scooterId: number, StorageId: number) {
    return this.http.get(this.url + "UpdateStorageId?" + "scooterId=" + scooterId + "&StorageId=" + StorageId).subscribe(x => { });
  }
  UpdateScooterIsFreeAddCreatOrder(scooterId: number, userId: number) {
    return this.http.get(this.url + "UpdateScooterIsFreeAddCreatOrder?" + "scooterId=" + scooterId + "&userId=" + userId);
  }

}
