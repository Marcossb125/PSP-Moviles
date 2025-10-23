import { Component } from '@angular/core';
import { Tarea } from '../models/tarea';


import { CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem, DragDropModule } 
from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-tablero-kanban',
  imports: [DragDropModule, CdkDrag, CdkDropList, CdkDropListGroup, ReactiveFormsModule],
  templateUrl: './tablero-kanban.html',
  styleUrl: './tablero-kanban.css'
})
export class TableroKanban {
  k:number = 0;
  formulario1:boolean = false;

  formulario: FormGroup;


  toDo:Tarea[] = [
    {id: crypto.randomUUID(), nombre: "Limpiar", descripcion: "Limpiar mucho"},
    {id: crypto.randomUUID(), nombre: "Limpiar", descripcion: "Limpiar mucho"},
    {id: crypto.randomUUID(), nombre: "Limpiar", descripcion: "Limpiar mucho"},
    {id: crypto.randomUUID(), nombre: "Limpiar", descripcion: "Limpiar mucho"},
  ]
  doing:Tarea[] = [
    {id: crypto.randomUUID(), nombre: "Recoger", descripcion: "Recoger mucho"},
    {id: crypto.randomUUID(), nombre: "Recoger", descripcion: "Recoger mucho"},
    {id: crypto.randomUUID(), nombre: "Recoger", descripcion: "Recoger mucho"},
    {id: crypto.randomUUID(), nombre: "Recoger", descripcion: "Recoger mucho"},
  ]
  done:Tarea[] = [
    {id: crypto.randomUUID(), nombre: "Recoger", descripcion: "Recoger mucho"},
  ]

  constructor(private fb: FormBuilder) {
    
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      deescripcion: ['', [Validators.required]],
    });
  }

  drop(event: CdkDragDrop<Tarea[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  eliminar(lista:Tarea[], tarea:Tarea) {

    for (this.k = 0; this.k < lista.length; this.k++) {
      if (lista[this.k].id == tarea.id) {
        lista.splice(this.k,1)
      }
    }
  }

  añadir(lista:Tarea[], nombre:string, descripcion:string) {
    lista.push({
      id: crypto.randomUUID(),
      nombre: nombre,
      descripcion: descripcion
    } )
  }

  mostrar(){
    if (this.formulario.invalid) {
      console.log("el formulario contiene errores");
    } else {
    console.log(this.formulario.value);
    }
  }
  cambio() {
    if (this.formulario1 == false) {
      this.formulario1 = true
    } else {
      this.formulario1 = false;
      this.añadir(this.toDo, this.formulario.get('nombre')?.value, this.formulario.get('descripcion')?.value)
      this.formulario.reset({
      nombre: '',
      descripcion: ''
    });
    }
  }
}
