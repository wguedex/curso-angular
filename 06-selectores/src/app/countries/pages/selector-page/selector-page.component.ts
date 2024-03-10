import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,   Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country, Region, SmallCountry } from '../../interfaces/countries.interface';
import { filter, switchMap, tap } from 'rxjs';
@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit{

  public countriesByRegion: SmallCountry[] = [];
  public borders: string[] = [];

  public myForm: FormGroup =  this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  onRegionChanged():void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('') ),
      switchMap( region => this.countriesService.getCountriesByRegion(region)
       )
    )
    .subscribe(countries =>{
      this.countriesByRegion = countries;
      // console.log({region})
    })
  }

  onCountryChanged():void{
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('border')!.setValue('') ),
      filter( (value:string)=>value.length > 0 ),
      switchMap( alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode) )
    )
    .subscribe(country =>{
      // this.countriesByRegion = countries;
      console.log({country})
      this.borders = country.borders;
    })
  }

  getCountriesByRegion(region:Region):SmallCountry[] {
    return [];
  }

  get regions(): Region[]{
    return this.countriesService.regions;
  }

}
