import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {

  constructor(private gifsService: GifsService){}

  get gifs(): Gifs[] {
    return this.gifsService.gifList;
  }



}
