import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  private GIPHY_API_KEY = '3uOo3EGUwjvBi1nYIrTWWPoRM4GWIPD3';

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

  // public searchTag(tag: string): void {
  //   if (tag.length === 0 ) return;
  //   this._organizeHistory(tag)
  // }

  public async searchTag(tag: string): Promise<void> {

    if (tag.length === 0 ) return;
    this._organizeHistory(tag)

    fetch('https://api.giphy.com/v1/gifs/search?api_key=3uOo3EGUwjvBi1nYIrTWWPoRM4GWIPD3&q=valorant&limit=10')
    .then(resp=>resp.json())
    .then(data=>console.log(data))

  }

}
