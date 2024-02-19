import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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

  reset(): void{
    this.counter = 10;
  }

}
