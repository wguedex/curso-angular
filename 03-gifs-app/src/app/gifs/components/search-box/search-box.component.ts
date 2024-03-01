import { Component, OnInit } from '@angular/core';

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
  (keyup.enter)="searchTag(txtTagInput.value)"
  >
  `
})

export class SearchBoxComponent {
  constructor() { }

  searchTag(newTag:string){
    console.log({newTag})
  }


}
