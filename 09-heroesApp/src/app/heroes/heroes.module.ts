import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    AuthRoutingModule
  ]
})
export class HeroesModule { }
