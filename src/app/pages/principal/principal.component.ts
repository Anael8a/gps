import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapCustomService } from 'src/app/services/map-custom.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  constructor (private mapCustomService: MapCustomService) {

  }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
    .then((data) => {
      console.log('*** TODO BIEN *****');
    })
    .catch((err) => {
      console.log('******* ERROR ******', err);
    });
  }

}
