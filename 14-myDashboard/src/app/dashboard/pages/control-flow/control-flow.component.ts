import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'control-flow.component.html',
  styleUrl: './control-flow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameWorks  = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameWorks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value)
  }

}
