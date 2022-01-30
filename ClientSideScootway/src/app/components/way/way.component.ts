import { Injectable,Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
@Component({
  selector: 'app-way',
  templateUrl: './way.component.html',
  styleUrls: ['./way.component.css']
})
export class WayComponent {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public submitted:boolean;
  favoriteForm: FormGroup;
  
  @ViewChild("search",{static: false})
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    this.favoriteForm = new FormGroup({
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
          this.favoriteForm.controls.FullAddress.setValue(place.name);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.favoriteForm.controls.FullAddress.setValue(place.formatted_address);
          this.favoriteForm.controls.latitude.setValue(place.geometry.location.lat());
          this.favoriteForm.controls.longitude.setValue(place.geometry.location.lng());
          
       
        });
      });
    });
  }
}