import { Component, OnInit, input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public Characters: Character[] = [
    {
      name: 'Krilling',
      power: 2000,
    },
    {
      name: 'Goku',
      power: 5000,
    },
  ];
}
