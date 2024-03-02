import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesComponent } from './pages/home/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePagesComponent
  ]
})
export class GifsModule { }
