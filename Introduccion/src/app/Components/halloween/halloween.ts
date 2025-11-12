import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { timer } from 'rxjs';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './halloween.html',
  styleUrl: './halloween.css'
})
export class Halloween {

  datosHalloween:String[] | null = [];
  halloween: boolean = false;

  halloweenD: Date = new Date("2025-10-31");
  actualidad: Date = new Date();

  diferencia: number = this.halloweenD.getTime() - this.actualidad.getTime();

  segundos: number = Math.floor(this.diferencia / 1000);
  dias: number = 0;
  horas: number = -2;
  minutos: number = 0;


  invitado:boolean;
  formulario: FormGroup;



  constructor(private fb: FormBuilder, private storage:LocalStorage) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      tipoInvitado: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      disfraz: ['', [Validators.required]],
      fechaLlegada: ['', [Validators.required]],
      aceptaReglas: ['', [Validators.requiredTrue]]

    });
      const datos_halloween = storage.getItem('formulario_halloween');
      if (datos_halloween) {
        const {formulario2} = JSON.parse(datos_halloween);
        this.formulario = formulario2;
        this.invitado = true;
      } else {
      this.invitado = false;
    }

    while (this.segundos >= 60) {
      this.minutos++;
      this.segundos = this.segundos - 60;

      if (this.minutos >= 60) {
        this.horas++;
        this.minutos = this.minutos - 60;
      }
      if (this.horas >= 24) {
        this.dias++;
        this.horas = this.horas - 24;
      }
    }


    const sub = timer(0, 1000).subscribe(() => {
      this.segundos--;
      if (this.segundos <= 0) {
        this.minutos--;
        this.segundos = 59;
      }
      if (this.minutos <= 0) {
        this.horas--;
        this.minutos = 59;
      }
      if (this.horas <= 0) {
        this.dias--;
        this.horas = 23;
      }
    });

    if (this.dias == 0 && this.horas == 0 && this.minutos == 0 && this.segundos == 0) {
      sub.unsubscribe();
      this.halloween = true;

    }

  }

  


  mostrar() {
    if (this.formulario.invalid) {
      console.log("el formulario contiene errores");
    } else {
      
      

      
    }
  }



  invitacion() {
    if (this.formulario.valid) {
      this.invitado = true;
      console.log("hola");
      this.storage.setNombre("formulario_halloween", JSON.stringify(this.formulario));
      this.storage.setItem("formulario_hallowee", "patata");
    }


  }
}
function mostrar(): number | undefined {
  throw new Error('Function not implemented.');
}

