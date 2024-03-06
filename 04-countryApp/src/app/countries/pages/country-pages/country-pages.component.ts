import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

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


  public country?: Country;
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  onSearchByCountryID(value: string) {
    this.countriesService.searchCountryByID(value).subscribe((countries) => {

    });
  }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByID( id ))
      )
      .subscribe(country => {
        if (!country){
          return this.router.navigateByUrl('');
        }
         this.country=country;
         return;
      });

  }


  // ngOnInit(): void {

  //   this.activateRoute.params
  //   .pipe(
  //     switchMap({ id }) => this.countriesService.searchCountryByID(id)),
  //   )
  //   .subscribe(({ id }) => {
  //     this.countriesService.searchCountryByID(id)
  //     .subscribe(country=>{
  //       console.log({country})
  //     });
  //   });

    // this.activateRoute.params.subscribe(({ id }) => {
    //   // console.log({params:id})
    //   this.countriesService.searchCountryByID(id)
    //   .subscribe(country=>{
    //     console.log({country})
    //   });
    // });

  }

