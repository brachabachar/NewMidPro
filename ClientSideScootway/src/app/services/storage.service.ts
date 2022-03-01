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


