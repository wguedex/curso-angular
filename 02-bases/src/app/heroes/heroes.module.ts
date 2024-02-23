import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { HeroesListComponent } from "./list/list.component";

@NgModule({
  declarations : [
    HeroComponent,
    HeroesListComponent
  ],
  exports: [
    HeroComponent,
    HeroesListComponent
  ],
   imports: [
    CommonModule
   ]
})
export class HeroesModule {

}
