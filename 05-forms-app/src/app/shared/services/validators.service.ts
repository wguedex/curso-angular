import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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

  public isFieldOneEqualFieldTwo( field1: string, field2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }

  }

  // public isFieldOneEqualFieldTwo(field1: string, field2: string) {
  //   return (formGroup: FormGroup): ValidationErrors | null => {
  //     const fieldValue1 = formGroup.get(field1)?.value;
  //     const fieldValue2 = formGroup.get(field2)?.value;

  //     if (fieldValue1 !== fieldValue2) {
  //       formGroup.get(field2)?.setErrors({ notEqual: true });
  //       return { notEqual: true };
  //     }

  //     formGroup.get(field2)?.setErrors(null);
  //     return null;
  //   };
  // }

}
