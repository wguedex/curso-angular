import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input() price : number = 0;

  constructor(){
    console.log('Componente HIJO')
  }

  ngOnInit(): void {
    console.log()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('Componente HIJO: ngOnChanges')
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy')
  }

}
