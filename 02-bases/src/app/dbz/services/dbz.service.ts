import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
        id: uuid(),
      name: 'Krilling',
      power: 2000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 5000,
    },
  ];

  onNewCharacterPadre(character: Character ): void {

    const newCharacter : Character = {id: uuid() , ...character}
    this.characters.push(newCharacter);

  }

  onDeleteCharacterPadre(index: number): void {
    this.characters.splice(index,1);
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id );
  }

}
