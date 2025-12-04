import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  imports: [],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {
  dinero:number = 0;
  sumaClick:number = 1;
  botonPulsado:boolean = false;

  sumar() {
    this.dinero = this.dinero + this.sumaClick;
    this.botonPulsado = true;

  setTimeout(() => {
    this.botonPulsado = false;
  }, 200);
  }
}
