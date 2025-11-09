import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './Components/contador/contador';
import { Topo } from './Components/topo/topo';
import { Menu } from '@angular/cdk/menu';
import { Tarjeta } from './Components/ListaPersonajes/tarjeta/tarjeta';
import { Lista } from './Components/ListaPersonajes/lista/lista';
import { FormularioRegistro } from './Components/formulario-registro/formulario-registro';
import { NavBar } from './Components/navbar/navbar';
import { TableroKanban } from './Components/tablero-kanban/tablero-kanban';
import { Eventos } from './services/eventos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Contador, NavBar, Tarjeta, Lista, FormularioRegistro, TableroKanban, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public eventos:Eventos){

  }
  protected readonly title = signal('Introduccion');

  halloween:boolean = false;

  
  
}
