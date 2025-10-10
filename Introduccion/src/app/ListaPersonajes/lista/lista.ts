import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-lista',
  imports: [Tarjeta],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  personajes:Personaje[] = [
    {nombre: "Vergil", poder: 5, imagen: "a", raza: "Demonio-Humano",},
    {nombre: "Dante", poder: 5, imagen: "b", raza: "Demonio-Humano",},
    {nombre: "Nero", poder: 4, imagen: "c", raza: "Demonio-Humano",},
    {nombre: "Lady", poder: 3, imagen: "d", raza: "humana",},
    {nombre: "Trish", poder: 3, imagen: "e", raza: "Demonio",},
    {nombre: "Calvo malo", poder: 2, imagen: "f", raza: "humano",},
    {nombre: "El papa fetichista", poder: 1, imagen: "g", raza: "cura",},

  ];

  
}
 