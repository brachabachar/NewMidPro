import { Injectable } from '@angular/core';
import { Scooter } from '../class/scooter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScooterService {
  url:string = "/api/Scooters/";
  scooter:Scooter=new Scooter();
  constructor(private http: HttpClient) { }

 AddScooter(s:Scooter){
    this.http.post(this.url+"AddScooter",s).subscribe(x=>{});
 }
 GetAllScooters(){
  return this.http.get(this.url+"GetAllScooters");
 }
 GetScooterId(scooterId:number){
  return this.http.get(this.url+"GetScooterId"+"scooterId"+scooterId);
 }
 GetScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetScooterId"+"StorageId"+StorageId);
 }
 GetCountScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetScooterId"+"StorageId"+StorageId);
 }
 UpdateStatusScooter(scooterId:number,state:number){
  return this.http.get(this.url+"GetScooterId"+"scooterId"+scooterId+"&state"+state);
 }
 UpdateStorageId(scooterId:number,StorageId:number){
  return this.http.get(this.url+"GetScooterId"+"scooterId"+scooterId+"&StorageId"+StorageId);
 }

}
