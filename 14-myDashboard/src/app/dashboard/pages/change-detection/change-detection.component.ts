import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFrameWork()" />
    <pre> {{ frameWorkAsSignal() | json }}</pre>
    <pre> {{ frameWorkAsProperty() | json }}</pre>
  `,
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {

  public currentFrameWork = computed(
    () => `Change detection - ${ this.frameWorkAsSignal().name}`
  );

  public frameWorkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameWorkAsProperty = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  constructor() {
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';
      this.frameWorkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));

    }, 3000);
  }
}
