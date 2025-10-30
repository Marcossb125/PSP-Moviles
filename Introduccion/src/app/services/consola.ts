import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Consola {

  toposMatados:number = 0;

  mostrarEnConsola(mensaje:string) {
    console.log(mensaje);
  }

  matarTopo () {
    this.toposMatados++;
  }

  resetearTopos() {
    this.toposMatados = 0;
  }
}
