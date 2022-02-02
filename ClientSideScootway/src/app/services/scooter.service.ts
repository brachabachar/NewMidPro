import { Injectable } from '@angular/core';
import { Scooter } from '../class/scooter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  constructor(private http: HttpClient) { }
  url:string = "http://localhost:44394/api/Scooters";

  
  AddScooter(s:Scooter){
    this.http.post("/api/Scooters",s).subscribe(x=>{});
  }
}
