
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  private GIPHY_API_KEY : string  = '3uOo3EGUwjvBi1nYIrTWWPoRM4GWIPD3';
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs';

  public gifList : Gifs[] = [];

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
  this._saveLocalStorage()

  }

  private _saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  public async searchTag(tag: string): Promise<void> {

    if (tag.length === 0 ) return;
    this._organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', this.GIPHY_API_KEY)
    .set('limit', 10)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params:params})
    .subscribe( resp => {

      this.gifList = resp.data;
      console.log({gifs: this.gifList})
    })

  }

}
