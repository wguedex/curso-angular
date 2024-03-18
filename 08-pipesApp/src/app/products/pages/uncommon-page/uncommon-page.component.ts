import { Component } from '@angular/core';

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



  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient():void{
    this.clients.shift();
  }

}
