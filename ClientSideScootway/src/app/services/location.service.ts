import { Place } from './../class/base-class/place';
import { Status } from '../class/status';
import { Injectable } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private apiloader: MapsAPILoader) { }
  getPlaceSync() {

  }
  getPlace(): Promise<Place> {
    return new Promise<Place>((resolve, reject) => {

      if (!navigator.geolocation) {
        reject(Error('No support for geolocation'));
        return;
      }
      let place: Place = new Place();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position) {
            place.GoogleCoordinateX = position.coords.latitude;
            place.GoogleCoordinateY = position.coords.longitude;
            let getAddress = (place.GoogleCoordinateX, place.GoogleCoordinateY)
            this.apiloader.load().then(() => {
              let geocoder = new google.maps.Geocoder;
              let latlng = {
                lat: place.GoogleCoordinateX,
                lng: place.GoogleCoordinateY
              };
              geocoder.geocode({
                'location': latlng
              }, function (results) {
                if (results[0]) {
                  place.FullAddress = results[0].formatted_address;
                } else {
                  console.log('Not found');
                }
                resolve(place);
              });
            });
          }
        });
      }
    });
  }
}