import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>change-detection works!</p>`,
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent { }
