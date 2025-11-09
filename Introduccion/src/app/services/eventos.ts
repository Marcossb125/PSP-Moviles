import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Eventos {
  halloween:boolean = false;
  normal:boolean = true;
  navidad:boolean = false;
  
  esHalloween(){
    if (this.halloween) {
      this.halloween = false;
    } else {
      this.halloween = true;
      this.navidad = false;
      this.normal = false;
    }
  }
  esNavidad () {
    if (this.navidad) {
      this.navidad = false;
    } else {
      this.navidad = true;
      this.halloween = false;
      this.normal = false;
    }
  }
  esNada () {
    if (this.normal) {
      this.normal = false;
    } else {
      this.navidad = false;
      this.halloween = false;
      this.normal = true;
    }
  }

}
