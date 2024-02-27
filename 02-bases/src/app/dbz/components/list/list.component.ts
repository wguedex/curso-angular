import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelCharacter : EventEmitter<number> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
    name: "Trunk",
    power: 1100
  }];

  onDeleteCharacter(index:number):void{
    //TODO: Emitir el ID del personaje
    this.onDelCharacter.emit(index);
  }

}
