import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private httpCliente : HttpClient) { }

  searchCapital(term:string): Observable<Country[]> {

    console.log({term})
    const url = `${this.apiUrl}/capital/${term}`
    return this.httpCliente.get<Country[]>(url)
    .pipe(
      catchError( error => {
        console.log(error);
        return of([]);
      })
    );

  }

  searchCountry(country:string): Observable<Country[]> {

    console.log({country})
    const url = `${this.apiUrl}/name/${country}`

    return this.httpCliente.get<Country[]>(url)
    .pipe(
      catchError( error => {
        console.log(error);
        return of([]);
      })
    );

  }

  searchRegion(region:string): Observable<Country[]> {

    console.log({region})
    const url = `${this.apiUrl}/region/${region}`

    return this.httpCliente.get<Country[]>(url)
    .pipe(
      catchError( error => {
        console.log(error);
        return of([]);
      })
    );

  }

  searchCountryByID(ID:string): Observable<Country[]> {

    console.log({ID})
    const url = `${this.apiUrl}/alpha/${ID}`

    return this.httpCliente.get<Country[]>(url)
    .pipe(
      catchError( error => {
        console.log(error);
        return of([]);
      })
    );

  }

}
