import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const RTX5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 6
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit{
  // Forma1:
  // PRIMER ARREGLO SYNCRONO
  // SEGUNDO ARREGLO ASYNCRONO
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [],[]),
  //   price: new FormControl(0, [],[]),
  //   inStorage: new FormControl(0, [],[])
  // })

  // Forma2:
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3) ], []],
    price: [0, [Validators.required, Validators.min(0)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() : void{
    // this.myForm.reset(RTX5090)
  }

  isvalidField(field:string): boolean | null{
    return this.myForm.controls[field].errors &&
           this.myForm.controls[field].touched;
  }

  getFieldError(field:string): string | null{

    // if (!this.myForm.controls[field] &&  !this.myForm.controls[field].errors)
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

  onSave() : void{

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)

    this.myForm.reset({price:0, inStorage:0})

  }

}
