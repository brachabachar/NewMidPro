import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  GetStorage(storageId:number){
   return this.http.get(this.url+"GetAllStorages"+"storageId"+storageId);
  }
  UpdateStatusStorages(storageId:number ,state:number){
  return this.http.get(this.url+"UpdateStatusStorages"+"storageId"+storageId+"&state"+state);
  }
  
}


