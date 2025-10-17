import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';
import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Tarjeta } from "./ListaPersonajes/tarjeta/tarjeta";
import { Lista } from './ListaPersonajes/lista/lista';
import { FormularioRegistro } from "./formulario-registro/formulario-registro";
import { NavBar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Contador, Menu, NavBar , Tarjeta, Lista, FormularioRegistro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
