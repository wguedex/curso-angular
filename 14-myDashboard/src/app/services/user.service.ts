import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response.interface';

interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

   #state = signal<State>({
    loading: true,
    users:[]
  })

  constructor() {
    console.log('Cargando data')
  }
}
