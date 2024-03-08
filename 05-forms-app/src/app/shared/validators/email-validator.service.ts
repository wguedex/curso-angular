import { Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements OnInit, AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email})

    //crear observable
  //  return  of({
  //     emailTaken: {
  //       message:'email is taken'
  //     },
  //   }).pipe(delay(2000));

  const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) =>{
    console.log({email});

    if (email==='fernando@gmail.com'){
      subscriber.next({emailTaken:true})
      subscriber.complete();
      return;
    }

    subscriber.next(null);
    subscriber.complete();

  } ).pipe(delay(2000));

  return httpCallObservable;

  }

  ngOnInit(): void {}
}


// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//     // delay(2000),
//     map(resp => {
//         return (resp.length === 0)
//             ? null
//             : { emailTaken: true }
//     })
// );
