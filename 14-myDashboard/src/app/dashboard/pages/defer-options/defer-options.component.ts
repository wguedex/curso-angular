import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>defer-options works!</p>`,
  styleUrl: './defer-options.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferOptionsComponent { }
