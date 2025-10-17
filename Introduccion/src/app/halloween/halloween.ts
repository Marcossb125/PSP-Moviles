import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './halloween.html',
  styleUrl: './halloween.css'
})
export class Halloween {

  formulario: FormGroup;

  
  
  constructor(private fb: FormBuilder) {
    
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      disfraz: ['', [Validators.required]],
      fechaLlegada: ['', [Validators.required]],
      aceptaReglas: ['', [Validators.required]]

    });
  }

  mostrar(){
    if (this.formulario.invalid) {
      console.log("el formulario contiene errores");
    } else {
    console.log(this.formulario.value);
    }
  }

   
}

