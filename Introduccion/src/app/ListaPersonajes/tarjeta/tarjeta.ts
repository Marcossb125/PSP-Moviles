import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
@Input() personaje:Personaje[] = new Personaje {"Vergil", 5, "a", "Demonio-Humano",};
}
