import { Component } from '@angular/core';
import { Topo } from '../topo/topo';
import { Contador } from '../contador/contador';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [Contador, Topo, MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  mostrar:boolean=true;
}
