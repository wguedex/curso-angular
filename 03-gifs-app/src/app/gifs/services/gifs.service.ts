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

  private _organizeHistory(tag:string) {
    tag = tag.toLowerCase();

    //Validar si existe el tag, si existe no incluir en el history
    if (this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag )
    }

  //incluir tag en el history
  this._tagHistory.unshift(tag)
  this._tagHistory = this.tagHistory.splice(0,10)

  }

  public searchTag(tag: string): void {

    if (tag.length === 0 ) return;

    this._organizeHistory(tag)

    // console.log('Desde el servicio')
    // this._tagHistory.unshift(tag);
  }
}
