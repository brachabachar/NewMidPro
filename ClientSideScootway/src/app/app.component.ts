import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Place } from './class/base-class/place';
import { UserService } from './services/user.service';
declare var google: any;
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('Map',{static: true})mapElement: ElementRef; 
  userService:UserService;
  title: any;
  // map: google.maps.Map;
  // marker: google.maps.Marker;
  constructor(userS:UserService){
    this.userService=userS;
    //this.userService.Test();  
  }
  GetPlace(place:Place){
    alert ("aa");
  }
  ngOnInit(): void { 
  //   this.initMap();
  //   const mapProperties = { 
  //        center: new google.maps.LatLng(-25.344, 131.036 ), 
  //        zoom: 15, 
  //        mapTypeId: google.maps.MapTypeId.ROADMAP ,
  //        icon: 'C:/Users/Bracha Bachar/Documents/GitHub/NewMidPro/ClientSideScootway/src/assets/scootWay.png',
  //        zIndex: 999999
  //   }; 
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties); 
  // 
  // }
  
  // title = 'ClientSideScootway';
  // userId:string="47";
  // GetUser(){
  //   this.userService.GetUser(this.userId);
  // }
  
  // //  initMap(): void {
  // //   // The location of Uluru
  // //   const uluru = { lat: -25.344, lng: 121.036 };
  // //   // The map, centered at Uluru
  // //   const map = new google.maps.Map(
  // //     document.getElementById("map") as HTMLElement,
  // //     {
  // //       zoom: 4,
  // //       center: uluru,
  // //     }
  // //   );
  
  // //   // The marker, positioned at Uluru
  // //   const marker = new google.maps.Marker({
  // //     position: uluru,
  // //     map: map,
  // //   });
  // // }
}

}