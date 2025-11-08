import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Consola } from '../services/consola';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  constructor(private consola: Consola) {

  }

  numero:number = 10;

  incrementar(){
    if (this.numero>= 10){
      this.numero = 10;
    } else {
    this.numero++;
    this.consola.mostrarEnConsola("Se aumentó el contador " + this.numero);
    }
  }

  decrementar(){
    if (this.numero<= 0){
      this.numero = 0;
    } else {
    this.numero--;
    this.consola.mostrarEnConsola("Se disminuyó el contador " + this.numero);
    }
  }


}
