import { Country, SmallCountry } from './../interfaces/countries.interface';
import { Injectable } from '@angular/core';
import { Region } from '../interfaces/countries.interface';
import { Observable, combineLatest, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _region: Region[] = [
    Region.Africa,
    Region.America,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    //Hacer una copia del arreglo y retornar
    return [...this._region];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
      // tap( response => console.log({response}) )
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );

  }

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {

    if (!borders || borders.length == 0) return of([]);

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests);
  }

}
