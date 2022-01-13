import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './services/user.service';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('Map',{static: true})mapElement: ElementRef; 
  userService:UserService;
  map: google.maps.Map;
  constructor(userS:UserService){
    this.userService=userS;
    this.userService.Test();  
  }

  ngOnInit(): void { 
    const mapProperties = { 
         center: new google.maps.LatLng(35.2271, -80.8431), 
         zoom: 15, 
         mapTypeId: google.maps.MapTypeId.ROADMAP 
    }; 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties); 
 }
  title = 'ClientSideScootway';
  userId:string="47";
  GetUser(){
    this.userService.GetUser(this.userId);
  }
}
