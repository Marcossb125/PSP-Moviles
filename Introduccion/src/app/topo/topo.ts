import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consola } from '../services/consola';

@Component({
  selector: 'app-topo',
  imports: [CommonModule],
  templateUrl: './topo.html',
  styleUrl: './topo.css'
})
export class Topo {
  nuevotopo:number | undefined;
  numero: number = 0;
  topos: number[] = [0, 0, 0, 0, 1, 0, 0, 0, 0]

  constructor(private c: Consola) {
  
  }

  aparicion(topo:number) {
    this.topos = [0,0,0,0,0,0,0,0,0]
    this.nuevotopo = Math.round(Math.random() * 8);
    while (this.nuevotopo == topo) {
      this.nuevotopo = Math.round(Math.random() * 8);
    }
    this.topos[this.nuevotopo] = 1;

  }
  incrementar(topo:number) {
    this.numero++;
    this.c.matarTopo();
    this.c.mostrarEnConsola("Has matado " + this.c.toposMatados + " topos");
    this.aparicion(topo);
  }

  fallo(topo:number) {
    this.numero--;
    this.aparicion(topo);
  }
}


