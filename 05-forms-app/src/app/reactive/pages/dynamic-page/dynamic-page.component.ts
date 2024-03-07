import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
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

  onSubmit(): void {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }

    console.log(this.myform.value);
    this.myform.reset();
  }
}
