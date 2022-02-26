import { Scooter } from './../class/scooter';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
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
    return this.http.post(this.url+"AddScooter",s);
 }
 GetAllScooters(){
  return this.http.get(this.url+"GetAllScooters");
 }
 GetScooterId(scooterId:number){
  return this.http.get(this.url+"GetScooterId?"+"scooterId="+scooterId);
 }
 GetScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetScootersByStorageId?"+"StorageId="+StorageId);
 }
 GetCountScootersByStorageId(StorageId:number){
  return this.http.get(this.url+"GetCountScootersByStorageId?"+"StorageId="+StorageId).subscribe(x=>{});
 }
 GetScooterInStreet(){
  return this.http.get(this.url+"GetScooterInStreet");
 }
 UpdateStatusScooter(scooterId:number,state:number){
  return this.http.get(this.url+"UpdateStatusScooter?"+"scooterId="+scooterId+"&state="+state).subscribe(x=>{});
 }
 UpdateStorageId(scooterId:number,StorageId:number){
  return this.http.get(this.url+"UpdateStorageId?"+"scooterId="+scooterId+"&StorageId="+StorageId).subscribe(x=>{});
 }
 UpdateScooterIsFree(scooterId:number){
  return this.http.post(this.url+"UpdateScooterIsFree",scooterId);
 }

}
