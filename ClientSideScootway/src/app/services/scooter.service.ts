import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Scooter } from '../class/scooter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScooterService {
  url:string = "/api/Scooter/";
  scooter:Scooter=new Scooter();
  constructor(private http: HttpClient) { }

 AddScooter(s:Scooter){
    this.http.post(this.url+"AddScooter",s).subscribe(x=>{});
 }//this.url+
 GetAllScooters(){
  return this.http.get(this.url+"GetAllScooters");
 }
 GetScooterId(scooterId:number){
  return this.http.get(this.url+"GetScooterId"+"scooterId"+scooterId).subscribe(x=>{});
 }
 GetScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetScootersByStorageId?"+"StorageId="+StorageId);
 }
 GetCountScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetCountScootersByStorageId?"+"StorageId="+StorageId).subscribe(x=>{});
 }
 UpdateStatusScooter(scooterId:number,state:number){
  return this.http.get(this.url+"UpdateStatusScooter?"+"scooterId="+scooterId+"&state="+state).subscribe(x=>{});
 }
 UpdateStorageId(scooterId:number,StorageId:number){
  return this.http.get(this.url+"UpdateStorageId?"+"scooterId="+scooterId+"&StorageId="+StorageId).subscribe(x=>{});
 }

}
