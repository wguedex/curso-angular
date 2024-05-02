import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { UserService } from '@services/user.service';
import { User } from '../../../interfaces/req-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl:  './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  private route = inject( ActivatedRoute )

  // public user = signal<User | undefined>(undefined);

  private UserService = inject(UserService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) =>
        this.UserService.getUserById( id)
     )
    ));

    public titleLabel = computed(() => {
      if (this.user()) {
          return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`;
      }
      return 'Información del usuario';
  });


  constructor(){
    this.route.params.subscribe(params=> {
      console.log(params)
    })
  }



}
