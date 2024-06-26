import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles:[
    `img {
      width: 25px
    }`
  ]
})
export class ByCapitalPagesComponent {

  @Input()
  public countries: Country[] = [];

  public isLoading: boolean = false

  constructor(private countriesService : CountriesService) {

  }

  onSearchByCapital(value:string): void{

    this.isLoading = true;

    this.countriesService.searchCapital(value).subscribe(countries =>{
      this.countries = countries;
      this.isLoading = false;
    })

  }

}
