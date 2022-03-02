import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateStatus } from '../class/base-class/updateStatus';
import { Storage } from '../class/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url:string = "/api/Storage/";
  storage:Storage=new Storage();
  constructor(private http: HttpClient) { }
  s:string='[{"Id":1,"Name":"בני ברק","GoogleCoordinateX":32.079331125333411,"GoogleCoordinateY":34.838045931186912,"FullAddress":"עזרא 34 בני ברק","CreatedOn":"2001-02-14T00:00:00","StatusId":1},{"Id":2,"Name":"תל אביב","GoogleCoordinateX":32.075169156706387,"GoogleCoordinateY":34.781883500498331,"FullAddress":"שלמה אבן גבירול 30 תל אביב-יפו","CreatedOn":"2001-02-14T00:00:00","StatusId":1},{"Id":3,"Name":"גבעת שמואל","GoogleCoordinateX":32.07846733368887,"GoogleCoordinateY":34.84694172933429,"FullAddress":"דוד בן גוריון 15 גבעת שמואל","CreatedOn":"2001-02-14T00:00:00","StatusId":1},{"Id":4,"Name":"פתח תקווה","GoogleCoordinateX":32.093525320429393,"GoogleCoordinateY":34.880235546530955,"FullAddress":"רוטשילד 22 פתח תקווה","CreatedOn":"2001-02-14T00:00:00","StatusId":1},{"Id":5,"Name":"בני ברק החלוצים","GoogleCoordinateX":32.0952747,"GoogleCoordinateY":34.8411863,"FullAddress":"החלוצים 28, בני ברק, ישראל","CreatedOn":"2022-02-27T13:54:33.57","StatusId":1},{"Id":6,"Name":"בדיקה- אסתר!","GoogleCoordinateX":32.069991,"GoogleCoordinateY":34.764778,"FullAddress":"עזרא הסופר, תל אביב-יפו, ישראל","CreatedOn":"2022-02-27T14:02:21.36","StatusId":1}]';
  AddStorage(storage:Storage){
    return this.http.post(this.url+"AddStorage",storage);
  }
  GetAllStorages(){
    return this.http.get(this.url+"GetAllStorage");
  }
  GetCountStorages(){
    this.http.get<Storage[]>(this.url+"GetCountStorages");
  }
  GetStorage(storageId:number){
   return this.http.get(this.url+"GetStorage?"+"storageId="+storageId);
  }

  UpdateStatusStorages(storageId:number ,state:number){
  return this.http.post(this.url+"UpdateStatusStorages", new UpdateStatus(storageId, state));
  }
  
}


