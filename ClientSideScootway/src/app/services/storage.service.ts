import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '../class/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url:string = "/api/Storage/";
  storage:Storage=new Storage();
  constructor(private http: HttpClient) { }

  AddStorage(s:Storage ){
  this.http.post(this.url+"AddStorage",s).subscribe(x=>{});
  }
  GetAllStorages(){
    return this.http.get(this.url+"GetAllStorages");
  }
  GetCountStorages(){
    this.http.get<Storage[]>(this.url+"GetCountStorages");
  }
  GetStorage(storageId:number){
   return this.http.get(this.url+"GetAllStorages"+"storageId"+storageId).subscribe(x=>{});
  }
  UpdateStatusStorages(storageId:number ,state:number){
  return this.http.get(this.url+"UpdateStatusStorages"+"storageId"+storageId+"&state"+state).subscribe(x=>{});
  }
  
}


