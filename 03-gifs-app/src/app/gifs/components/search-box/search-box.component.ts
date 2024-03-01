import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template:
  `
  <h5>Buscar:</h5>
  <input
  type="text"
  class="form-control"
  placeholder="Buscar Gifs"
  #txtTagInput
  (keyup.enter)="searchTag( )"
  >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  searchTag( ){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
  }


}
