import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

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
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion? : Region;

  constructor(private countriesService : CountriesService) {

  }

  onSearchByRegion(region:Region): void{

    this.selectedRegion = region;

    this.countriesService.searchRegion(region).subscribe(countries =>{
      this.countries = countries;
    })

  }

}
