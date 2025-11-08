import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../services/local-storage';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatSlideToggleModule, FormsModule, MatMenuModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavBar {

  nombre:String="";
  constructor(private storage:LocalStorage) {

  }

  ngOnInit() {
    this.storage.getItem("nombre");
  }

  pi:string="pi pi piiiiiiiiii";
  halloween:boolean = true;

}