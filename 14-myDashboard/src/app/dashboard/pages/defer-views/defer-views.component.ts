import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>defer-views works!</p>`,
  styleUrl: './defer-views.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferViewsComponent { }
