import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tarjeta',
  imports: [MatIconModule, CommonModule, MatTabsModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() nombre:String | undefined;
  @Input() poder:number | undefined;
  @Input() imagen:String | undefined;
  @Input() raza:String | undefined;
  @Input() historia:String | undefined;
}