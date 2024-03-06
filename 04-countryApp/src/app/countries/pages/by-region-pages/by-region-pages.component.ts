import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles:[
    `img {
      width: 25px
    }`
  ]
})
export class ByRegionPagesComponent {

  public countries: Country[] = [];

  constructor(private countriesService : CountriesService) {

  }

  onSearchByRegion(value:string): void{

    this.countriesService.searchRegion(value).subscribe(countries =>{
      this.countries = countries;
    })

  }



}
