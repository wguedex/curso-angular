import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [],
})
export class SharedModule { }
