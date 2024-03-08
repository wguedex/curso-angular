import { Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements OnInit, AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    //crear observable
   return  of({
      emailTaken: true,
    });
  }

  ngOnInit(): void {}
}
