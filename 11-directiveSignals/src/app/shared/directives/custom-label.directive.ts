import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  @Input()
  set color( value: string ){
    this._color=value;
    this.setStyle();
    console.log('color:',value);
  }

  private htmlElement?: ElementRef<HTMLElement>;
  private _color:string = 'red';

  constructor( private el : ElementRef<HTMLElement>) {
    console.log(el)
    this.htmlElement=el;
    this.htmlElement.nativeElement.innerHTML='Hola Mundo';
  }

  ngOnInit(): void {
    console.log('Directiva - NgOnInit')
    this.setStyle();
  }

  setStyle():void{

    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color ;

  }

}
