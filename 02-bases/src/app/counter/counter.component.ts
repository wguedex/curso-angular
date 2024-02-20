
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter',
  templateUrl : './counter.component.html',

})
export class CounterComponent {

  public title:string = 'Mi primera app en Angular';
  public counter : number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  resetCounter(): void{
    this.counter = 10;
  }

}

