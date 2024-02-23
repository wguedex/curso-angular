import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  // standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class HeroesListComponent {

  public heroNames : string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHero():void {
    //Borrar el ultimo heroe de la lista
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero)
  }

}
