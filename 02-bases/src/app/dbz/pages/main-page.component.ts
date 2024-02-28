import { Component, OnInit, input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[] {
    //crear una copia de los caracter
  return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string): void{
    this.dbzService.onDeleteCharacterById(id)
  }

  onNewCharacter(character:Character) : void {
    this.dbzService.onNewCharacterPadre(character)
  }

}
