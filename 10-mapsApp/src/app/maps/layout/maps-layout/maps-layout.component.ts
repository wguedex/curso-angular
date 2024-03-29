import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './maps-layout.component.html',
  styleUrls: ['./maps-layout.component.css']
})
export class MapsLayoutComponent {

  @Input()
  lngLat?: [number,number];

  ngAfterViewInit(){

    if (!this.lngLat) throw "LngLat can't be null";

    // mapa

    // marker



  }

}
