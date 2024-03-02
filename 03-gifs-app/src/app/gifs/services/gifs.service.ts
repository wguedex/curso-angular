
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  private GIPHY_API_KEY = '3uOo3EGUwjvBi1nYIrTWWPoRM4GWIPD3';

  constructor(private http: HttpClient) {}

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

  public async searchTag(tag: string): Promise<void> {

    if (tag.length === 0 ) return;
    this._organizeHistory(tag)


    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=3uOo3EGUwjvBi1nYIrTWWPoRM4GWIPD3&q=valorant&limit=10')
    .subscribe( resp => {
      console.log(resp)
    })

  }

}
