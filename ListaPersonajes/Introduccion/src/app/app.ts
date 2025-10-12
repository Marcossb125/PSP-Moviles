import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista } from './ListaPersonajes/lista/lista';
import { Tarjeta } from './ListaPersonajes/tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  imports: [Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
