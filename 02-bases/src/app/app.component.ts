import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from './counter/counter.module';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  imports: [CounterModule]
})
export class AppComponent {
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
