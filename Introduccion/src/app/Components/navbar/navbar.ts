import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Eventos } from '../../services/eventos';
import { LocalStorage } from '../../services/local-storage';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatSlideToggleModule, FormsModule, MatMenuModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavBar implements OnInit{
  constructor(public eventos: Eventos, private storage:LocalStorage) {
    
  }

nombre:string | null = "";
  

  ngOnInit() {
    console.log(this.storage.getNombre());
    this.nombre=this.storage.getNombre();
    if (this.nombre == null) {
      this.nombre = "formularioHalloween";
    } 
  }




  pi: string = "pi pi piiiiiiiiii";

}