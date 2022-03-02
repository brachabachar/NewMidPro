import { Injectable,Component, OnInit, ElementRef, ViewChild, NgZone, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Place } from 'src/app/class/base-class/place';
@Component({
  selector: 'app-way',
  templateUrl: './way.component.html',
  styleUrls: ['./way.component.css']
})
export class WayComponent implements OnInit{
  @Output() placeOut:EventEmitter<Place>= new EventEmitter();
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public submitted:boolean;
  autoCompleteForm: FormGroup;
  
  @ViewChild("search",{static: false})
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    this.autoCompleteForm = new FormGroup({
      Alias: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Zא-ת ]+$'),Validators.max(20)]),
      latitude: new FormControl('',[Validators.required]),
      longitude: new FormControl(''),
      FullAddress: new FormControl('')
    });
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    //create search FormControl
    this.searchControl = new FormControl();
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
          let p:Place=new Place()
          p.FullAddress=place.formatted_address??"";
          p.GoogleCoordinateX=place.geometry.location.lat();
          p.GoogleCoordinateY=place.geometry.location.lng();
          this.placeOut.emit(p);
        });
      });
    });
  }
}