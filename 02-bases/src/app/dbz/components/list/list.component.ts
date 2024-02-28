import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelCharacter : EventEmitter<number> = new EventEmitter();

  @Output()
  public onDelCharacterById : EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
    id: uuid(),
    name: "Trunk",
    power: 1100
  }];

  onDeleteCharacter(index:number):void{
    //TODO: Emitir el ID del personaje
    this.onDelCharacter.emit(index);
  }

  onDeleteCharacterById(uuid:string | undefined):void{
    //TODO: Emitir el UUID del personaje

    if (uuid === undefined) {
      console.error('Intento de eliminar un personaje sin ID');
      return;
    }

    console.log(uuid)

    this.onDelCharacterById.emit(uuid);
  }

}
