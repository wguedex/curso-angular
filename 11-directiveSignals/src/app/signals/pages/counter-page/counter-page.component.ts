import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(10);

  public squareCounter = computed( () => this.counter() * this.counter() );

  increase(value : number){
    this.counter.update(current => current + value);
  }

  dicrease(value : number){
    this.counter.update(current => current - value);
  }

}
