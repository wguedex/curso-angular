import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>control-flow works!</p>`,
  styleUrl: './control-flow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent { }
