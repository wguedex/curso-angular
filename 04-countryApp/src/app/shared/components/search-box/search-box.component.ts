import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit{

  @Input() public placeHolder: string = '';

  @Output() public onValue: EventEmitter<string> = new EventEmitter();

  @Output() public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string>= new Subject<string>();

  constructor(){ }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      // console.log('debouncer value', value);
      this.onDebounce.emit(value)
    });
  }

  emitValue(value:string): void {

    this.onValue.emit(value);

  }

  onKeyPress(searchterm: string){
    this.debouncer.next(searchterm);
  }



}
