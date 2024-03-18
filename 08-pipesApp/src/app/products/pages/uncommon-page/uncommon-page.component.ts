import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  public name:string = 'Fernando';
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female: 'invitarla'
  }

  //i18n Plural
  public clients: string[] = ['maria','eduardo','fernando','hernando','pedro','francisco','melissa','Natalia']
  public clientsMap = {
    '=0': "no tenemos ningun cliente esperando",
    '=1': "tenemos un cliente esperando",
    'other': "tenemos # clientes esperando."
  }

  //KeyValue Pipe
  public person = {
    name:'Fernando',
    age:36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value=>console.log('tap',value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tenemos data en la promesa.');
        console.log('Tenemos data en la promesa.');
    }, 3500);
})

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient():void{
    this.clients.shift();
  }

}
