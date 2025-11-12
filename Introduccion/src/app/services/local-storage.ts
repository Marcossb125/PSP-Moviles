import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  setItem(key:string, item:string){
    localStorage.setItem(key, item);
  }
  
  getNombre(){
      return localStorage.getItem("nombre");
    }
    setNombre(key:string, nombre:string) {
      return localStorage.setItem(key, nombre);
    }
    getItem(key:string){
      return localStorage.getItem(key);
    }
  

  clear(){
    localStorage.clear();
  }
  
    
  

}
