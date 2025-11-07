import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  setItem(key:string, item:string){
    localStorage.setItem(key, item);
  }
  getItem(key:string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear();
  }
  
    
  

}
