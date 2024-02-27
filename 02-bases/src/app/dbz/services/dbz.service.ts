import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krilling',
      power: 2000,
    },
    {
      name: 'Goku',
      power: 5000,
    },
  ];

  onNewCharacterPadre(character: Character ): void {
    this.characters.push(character);
  }

  onDeleteCharacterPadre(index: number): void {
    this.characters.splice(index,1);
  }

  constructor() { }
}
