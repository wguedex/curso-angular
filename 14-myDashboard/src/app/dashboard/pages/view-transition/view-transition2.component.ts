import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  template: `

  <app-title title="View Transition"/>

  <section class="flex justify-start">

  <img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300">

  <div class="bg-blue-500 w-56 h-56"></div>

  </section>

  `,
  styleUrl: './view-transition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent { }
