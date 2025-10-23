import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';
import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Tarjeta } from "./ListaPersonajes/tarjeta/tarjeta";
import { Lista } from './ListaPersonajes/lista/lista';
import { FormularioRegistro } from "./formulario-registro/formulario-registro";
import { NavBar } from './navbar/navbar';
import { TableroKanban } from './tablero-kanban/tablero-kanban';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Contador, Menu, NavBar , Tarjeta, Lista, FormularioRegistro, TableroKanban],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');

  halloween:boolean = false;

  esHalloween () {
    if (this.halloween == true) {
      this.halloween = false;
    } else {
      this.halloween = true
    }
  }
  
}
