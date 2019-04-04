import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private router: Router
  ) {
    this.form = fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', Validators.required],
      material: ['', Validators.nullValidator]
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

  ngOnInit() {
  }

  handleSubmit() {
    this.furnitureService.createFurniture(this.form.value).subscribe(() => {
      this.router.navigate(['/furniture/all'])
    })
  }
}
