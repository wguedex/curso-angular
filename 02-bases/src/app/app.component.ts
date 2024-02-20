import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from './counter/counter.module';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  imports: [CounterModule]
})
export class AppComponent {}
