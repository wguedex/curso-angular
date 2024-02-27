import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0

  };

  emitCharacter():void {
    console.log(this.character)
  }
}
