import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
/*import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';*/
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 21.47672642658506;
  lng = -104.86678243632873;
  zoom = 12;

  constructor() {
    this.mapbox.accessToken = environment.mapPK;
   }

   buildMap(): Promise<any> {
    /**
     * TODO: Aqui construimos el mapa
     */

    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });

        this.map.addControl(new mapboxgl.NavigationControl())

        this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        }))

        resolve({
          map: this.map
        });

      } catch (e) {
        reject(e);
      }
    });
  }

}
