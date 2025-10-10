import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topo',
  imports: [CommonModule],
  templateUrl: './topo.html',
  styleUrl: './topo.css'
})
export class Topo {
  numero:number = 0;
  topo1:number = 0;
  topo2:number = 0;
  topo3:number = 0;
  topo4:number = 0;

  aparicion() {
    this.topo1 = Math.random();
    this.topo2 = Math.random();
    this.topo3 = Math.random();
    this.topo4 = Math.random();
  }
  incrementar(){
    this.numero++;
    }
  }


