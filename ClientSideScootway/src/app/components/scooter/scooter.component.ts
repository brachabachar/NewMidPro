import { ValidatorFn } from '@angular/forms';
import { ListAdd } from './../../class/base-class/list-add';
import { List } from 'src/app/class/base-class/list';
import { EScooter } from './../../class/base-class/EScooter';
import { Scooter } from './../../class/scooter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScooterService } from 'src/app/services/scooter.service';
import { map } from "rxjs/operators";
import { Add } from 'src/app/class/base-class/add';

@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.component.html',
  styleUrls: ['./scooter.component.css']
})
export class ScooterComponent implements OnInit {

  eScooter:EScooter;
  allScooter:List=new List();//AllScooter
  addScooter:ListAdd;//AddScooter

  constructor(public scooterService:ScooterService,private router:ActivatedRoute) {
    this.eScooter=this.router.snapshot.params['eScooter'];
   }

  ngOnInit(): void {
    this.CheckComponentByEnum(this.eScooter);
  }
  public get EScooter() {
    return EScooter; 
  }
  CheckComponentByEnum(eScooter:EScooter){
    switch (eScooter) {
      case EScooter.AllScooter:
     this.AllScooter();
      break;
      case EScooter.UpdatStatScooter:
        this.UpdatStatScooter(1,2);
      break;
      
      case EScooter.AddScooter:
        this.AddScooter();
      break;
      case EScooter.AddNoteScooter:
        this.AddNoteScooter();
      break;
      case EScooter.AddScooterToStorage:
        this.AddScooterToStorage(1,1);
        break;
        case EScooter.PerceptionScooter:
        this.PerceptionScooter(1);
        break;
        case EScooter.GetScooterInStreet:
          this.GetScooterInStreet();
          break;
      default:
        break;
    }
  }
  AllScooter(){
   this.scooterService.GetAllScooters()
   .subscribe((scooter)=>{
    let scooterList:Scooter[]=JSON.parse(scooter.toString());
    this.allScooter.Title="רשימה קורקינט";
    scooterList.forEach(x=> this.allScooter.List.set(x.Id," :מספר קורקינט"+x.Id));
  });
   }
  UpdatStatScooter(scooterId:number,state:number){
    this.scooterService. UpdateStatusScooter(scooterId,state);
  }
  AddScooter(){
    this.DateNewScooter();
  }
  AddNoteScooter(){
   
  }
  AddScooterToStorage(scooterId:number,StorageId:number){
  }
  PerceptionScooter(scooterId:number){
    this.scooterService.UpdateStatusScooter(scooterId,1)
  }
  GetScooterInStreet(){
    this.scooterService.GetScooterInStreet()
    .subscribe((scooter)=>{
     let scooterList:Scooter[]=JSON.parse(scooter.toString());
     this.allScooter.Title="קורקינטים בסביבה";
     scooterList.forEach(x=> this.allScooter.List.set(x.Id," : מיקום הקורקינט"+x.FullAddress));
   });
  }
  GetScooterID(ID:number){  
    console.log(ID);  
 } 
 DateNewScooter(){
  let valid:ValidatorFn[]=[];
  let addL:Add[]=[new Add("בחר מחסן","",valid,new List,"",null,1)];
  this.addScooter=new ListAdd();
  this.addScooter.Title="";
  this.addScooter.TitleSubmit="";
  this.addScooter.List=addL;
 }
}
