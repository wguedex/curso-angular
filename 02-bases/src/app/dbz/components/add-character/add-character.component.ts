import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0

  };

  emitCharacter():void {
    // console.log(this.character)

    console.log('onNewCharacterHijo - addCharacter');

    if (this.character.name.length===0) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = ''
    this.character.power = 0
  }
}
