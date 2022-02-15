import { EScooter } from './../../class/base-class/EScooter';
import { Scooter } from './../../class/scooter';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/class/base-class/list';
import { ActivatedRoute } from '@angular/router';
import { ScooterService } from 'src/app/services/scooter.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.component.html',
  styleUrls: ['./scooter.component.css']
})
export class ScooterComponent implements OnInit {

  eScooter:EScooter;
  list:List=new List;
  scooter:Scooter[];

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
    let scooter:Number=Number(eScooter);
    switch (scooter) {
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
      default:
        break;
    }
  }
  AllScooter(){
   this.scooterService.GetAllScooters()
   .subscribe((scooter)=>{
    this.scooter=JSON.parse(scooter.toString());
    this.list.title="רשימה קורקינט";
    this.scooter.forEach(x=> this.list.list.set(x.Id," :מספר קורקינט"+x.Id));
  });
   }
  UpdatStatScooter(scooterId:number,state:number){
    this.scooterService. UpdateStatusScooter(scooterId,state);
  }
  AddScooter(){
   
  }
  AddNoteScooter(){
   
  }
  AddScooterToStorage(scooterId:number,StorageId:number){
  }
  PerceptionScooter(scooterId:number){
    this.scooterService.UpdateStatusScooter(scooterId,1)
  }
  GetOrderID(ID:number){  
    console.log(ID);  
 } 
}
