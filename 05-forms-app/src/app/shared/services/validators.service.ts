import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  cantbyStrider = (control:FormControl) =>{

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider' ){
      debugger;
      return {
        noStrider: false
      }
    }

    return null;
  }

  public isvalidField(form:FormGroup, field:string) {
    return  form.controls[field].errors && form.controls[field].touched;
  }

}
