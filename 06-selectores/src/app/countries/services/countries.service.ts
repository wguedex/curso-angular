import { SmallCountry } from './../interfaces/countries.interface';
import { Injectable } from '@angular/core';
import { Region } from '../interfaces/countries.interface';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root' })
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _region : Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania];

  constructor(
    private http: HttpClient
  ) { }

  get regions(): Region[] {
    //Hacer una copia del arreglo y retornar
    return [ ...this._region ]
  }

  getCountriesByRegion(region:Region): Observable<SmallCountry[]>{

    if (!region) return of([]);

    const url: string = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`;

    return this.http.get<SmallCountry[]>(url)
    .pipe(
      tap( response => console.log({response}) )
    )

  }



}
