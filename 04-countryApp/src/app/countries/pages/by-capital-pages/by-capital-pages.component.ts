import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: ``
})
export class ByCapitalPagesComponent {

  onSearchByCapital(value:string): void{
    console.log('Desde ByCapitalPage')
    console.log({value})
  }

}
