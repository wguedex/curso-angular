import { Injectable } from '@angular/core';
import { Region } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root' })
export class CountriesService {

  private _region : Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania];

  constructor() { }

  get regions(): Region[] {
    //Hacer una copia del arreglo y retornar
    return [ ...this._region ]
  }

}
