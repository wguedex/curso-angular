import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-by-country-pages',
  templateUrl: './country-pages.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class CountryPagesComponent implements OnInit {
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private activateRoute: ActivatedRoute
  ) {}

  onSearchByCountryID(value: string) {
    this.countriesService.searchCountryByID(value).subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ id }) => {
      // console.log({params:id})
      this.countriesService.searchCountryByID(id)
      .subscribe(country=>{
        console.log({country})
      });
    });
  }
}
