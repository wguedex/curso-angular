import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent implements OnInit {

  public Person = {
    gender: 'F',
    wantNotifications: false
  }

  public myForm: FormGroup = this.fb.group({
    gender: ['M',Validators.required],
    wantNotifications:[true,Validators.required],
    termConditions:[false,Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.myForm.reset(this.Person)
  }

  isvalidField(field:string): boolean | null{
    return this.myForm.controls[field].errors &&
           this.myForm.controls[field].touched;
  }

  getFieldError(field:string): string | null{

    if (!this.myForm.controls[field] )
    { return null };

    const errors = this.myForm.controls[field].errors || {};

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

  onSave(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    const {termsAndConditions, ...newPerson} = this.myForm.value;

    this.Person = newPerson;
    console.log(this.myForm.value)
    console.log(this.Person)
  }


}
