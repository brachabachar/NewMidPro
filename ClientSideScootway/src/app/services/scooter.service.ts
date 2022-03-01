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
    return this.http.get(this.url + "GetScootersByStorageId?" + "StorageId=" + StorageId);
  }
  GetCountScootersByStorageId(StorageId: number) {
    return this.http.get(this.url + "GetCountScootersByStorageId?" + "StorageId=" + StorageId).subscribe(x => { });
  }
  GetScooterInStreet() {
    return this.http.get(this.url + "GetScooterInStreet");
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
