import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.ValidatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)]],
    username: ['', [Validators.required, customValidators.cantbyStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor( private fb: FormBuilder,
               private ValidatorsService : ValidatorsService ) {}

  isValidField( field: string ) {
    // TODO: obtener validación desde un servicio
    return this.ValidatorsService.isvalidField(this.myForm,field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
