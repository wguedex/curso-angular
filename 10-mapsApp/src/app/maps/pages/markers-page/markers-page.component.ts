import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { Map, LngLat, Marker } from 'mapbox-gl';


@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements OnDestroy{

  ngOnDestroy(): void {
    this.map?.remove();
  }

  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.10380784179445, 4.651165392795477);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 10,
    });

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Fernando Herrera';
    markerHtml.style.background = 'white';
    markerHtml.style.padding = '5px';
    markerHtml.style.borderRadius = '5px';
    markerHtml.style.color = 'black';
    markerHtml.style.fontWeight = 'bold';

    new Marker({
      element: markerHtml
    })
    .setLngLat(this.currentLngLat)
    .addTo(this.map);

  }

}
