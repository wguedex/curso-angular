import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  @Input() public placeHolder: string = '';

  @Output() public onValue: EventEmitter<string> = new EventEmitter();

  @Output() public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string>= new Subject<string>();

  private debouncerSubscription? : Subscription;

  constructor(){ }

  ngOnDestroy(): void {
    console.log('Destruido')
    this.debouncerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
   this.debouncerSubscription =  this.debouncer
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
