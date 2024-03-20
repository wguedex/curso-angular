import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent,
    NewPageComponent,
    ListPageComponent,
    HeroPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    AuthRoutingModule
  ]
})
export class HeroesModule { }
