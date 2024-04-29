import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>view-transition works!</p>`,
  styleUrl: './view-transition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent { }
