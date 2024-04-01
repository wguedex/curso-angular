import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {



  //Otra forma de crear el objeto formbuilder
  private fb = inject(FormBuilder)

  public color:string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required, Validators.minLength(6), Validators.email]
  });


}
