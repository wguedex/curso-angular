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
    inStorage: [0, [Validators.min(0)], []],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() : void{
    this.myForm.reset(RTX5090)
  }

  onSave() : void{

    if (this.myForm.invalid) return;

    console.log(this.myForm.value)

    this.myForm.reset({price:0, inStorage:0})

  }

}
