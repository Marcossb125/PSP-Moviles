import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';
import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Navbar } from './navbar/navbar';
import { Tarjeta } from "./ListaPersonajes/tarjeta/tarjeta";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topo, Contador, Menu, Navbar, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
