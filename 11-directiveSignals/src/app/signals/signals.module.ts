import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { RouterModule } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    RouterModule
  ]
})
export class SignalsModule { }
