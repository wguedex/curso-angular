import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public newFavorite: FormControl = new FormControl('',[Validators.required])

  public myform: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myform.get('favoriteGames') as FormArray;
  }


  isvalidField(field:string): boolean | null{
    return this.myform.controls[field].errors &&
           this.myform.controls[field].touched;
  }

  getFieldError(field:string): string | null{

    // if (!this.myForm.controls[field] &&  !this.myForm.controls[field].errors)
    if (!this.myform.controls[field] )
    { return null };

    const errors = this.myform.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      // console.log(key)
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return 'Este requiere minimo 3 letras'

      }
    }

    return null;

  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors &&
          formArray.controls[index].touched;
  }

  onSubmit(): void {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }

    console.log(this.myform.value);
    this.myform.reset();
    (this.myform.controls['favoriteGames'] as FormArray) = this.fb.array([])
  }

  onDeleteFavorite(index:number):void{
    this.favoriteGames.removeAt(index);
  }

  onAddtoFavorites():void {
    if (this.newFavorite.invalid) {
      return;
    }
    console.log(this.newFavorite.value);

    const newGame = this.newFavorite.value;
    this.favoriteGames.push(
      this.fb.control(newGame,Validators.required)
    );
    this.newFavorite.reset()

  }

}
