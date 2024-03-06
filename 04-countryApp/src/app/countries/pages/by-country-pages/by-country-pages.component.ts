import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles:[
    `img {
      width: 25px
    }`
  ]
})
export class ByCountryPagesComponent {

  public countries: Country[] = [];

  constructor(private countriesService : CountriesService) {

  }

  onSearchByCountry(value:string): void{

    this.countriesService.searchCountry(value).subscribe(countries =>{
      this.countries = countries;
    })

  }



}
