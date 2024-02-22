import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  // standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age:number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(newName:string): void {
    this.name = newName
  }

  changeAge(newAge:number):void {
    this.age = newAge
  }

  reset():void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
