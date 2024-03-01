import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  constructor() {}

  get tagHistory() {
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    console.log('Desde el servicio')
    this._tagHistory.unshift(tag);
  }
}
