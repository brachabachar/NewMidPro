import { timeout } from 'rxjs/operators';
import { Injectable,Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
title='locationApp';
public latitude: number;
public longitude: number;
public searchControl: FormControl;
public searchControl2: FormControl;

lat = 0;
lng = 0;
lat2 = 40.0695462;
lng2 = 38.8949019;
autoCompleteForm: FormGroup;

@ViewChild("search",{static: false})
public searchElementRef: ElementRef;

constructor( private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit(): void {
    //validation
    this.autoCompleteForm = new FormGroup({
      Alias: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Zא-ת ]+$'),Validators.max(20)]),
      latitude: new FormControl('',[Validators.required]),
      longitude: new FormControl(''),
      FullAddress: new FormControl('')
    });
   //create search FormControl
   this.searchControl = new FormControl();
   this.searchControl2 = new FormControl();

   //load Places Autocomplete
   this.mapsAPILoader.load().then(() => {
     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
       types: ["address"]
     });
     autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.autoCompleteForm.controls.FullAddress.setValue(place.name);
        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        //set latitude, longitude and zoom
        this.autoCompleteForm.controls.FullAddress.setValue(place.formatted_address);
        this.autoCompleteForm.controls.latitude.setValue(place.geometry.location.lat());
        this.autoCompleteForm.controls.longitude.setValue(place.geometry.location.lng());
        this.lat=place.geometry.location.lat();
        this.lng=place.geometry.location.lng();
        console.log('lat:',this.lat,'lng:',this.lng);
      });
    });
  });         
    //give my location automatically
    if(!navigator.geolocation){
      console.log('location is not support');
    }
    navigator.geolocation.getCurrentPosition((postion)=>{
      console.log('lat:',postion.coords.latitude,'lon:',postion.coords.longitude)
      this.lat=postion.coords.latitude;
      this.lng=postion.coords.longitude;
    });
    // this.watchPostion();
    
  }
  //function that send loction every 5 min
  watchPostion(){
    let deslat=0;
    let deslon=0;
 let id= navigator.geolocation.watchPosition((postion)=>{console.log('lat:',postion.coords.latitude,'lon:',postion.coords.longitude);
    //when he come to his location
    if(postion.coords.latitude==deslat&&postion.coords.longitude==deslon){
      navigator.geolocation.clearWatch(id);
    }
},(err)=>{
    console.log('error'); 
  },
  {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
  }
 );
}
}
