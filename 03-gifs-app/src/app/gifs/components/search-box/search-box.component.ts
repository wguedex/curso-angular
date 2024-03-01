import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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

  constructor(private gifsService: GifsService) { }

  searchTag( ){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
    this.gifsService.searchTag(newTag)
  }


}
