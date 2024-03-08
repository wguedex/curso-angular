import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,   Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country, Region, SmallCountry } from '../../interfaces/countries.interface';
import { switchMap } from 'rxjs';
@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit{

  public myForm: FormGroup =  this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.onRegionChanged()
  }

  onRegionChanged():void{
    console.log('aqui')
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap( region => this.countriesService.getCountriesByRegion(region)
       )
    )
    .subscribe(region =>{
      console.log({region})
    })
  }

  getCountriesByRegion(region:Region):SmallCountry[] {
    return [];
  }

  get regions(): Region[]{
    return this.countriesService.regions;
  }

}
