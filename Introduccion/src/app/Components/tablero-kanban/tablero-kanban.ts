import { Component } from '@angular/core';
import { Tarea } from '../models/tarea';
import { CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem, DragDropModule }
  from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { LocalStorage } from '../../services/local-storage';
import { Eventos } from '../../services/eventos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablero-kanban',
  imports: [DragDropModule, CdkDrag, CdkDropList, CdkDropListGroup, ReactiveFormsModule, MatExpansionModule, CommonModule],
  templateUrl: './tablero-kanban.html',
  styleUrl: './tablero-kanban.css'
})
export class TableroKanban {
  k: number = 0;
  formulario1: boolean = false;

  formulario: FormGroup;


  toDo: Tarea[] = []
  doing: Tarea[] = []
  done: Tarea[] = []

  constructor(private fb: FormBuilder, public eventos: Eventos) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

    const datos = localStorage.getItem('listas de tareas kanban');
    if (datos) {
      const { toDo, doing, done } = JSON.parse(datos);
      this.toDo = toDo || [];
      this.doing = doing || [];
      this.done = done || [];
    }
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
    this.localStorage();
  }
  eliminar(lista: Tarea[], tarea: Tarea) {

    for (this.k = 0; this.k < lista.length; this.k++) {
      if (lista[this.k].id == tarea.id) {
        lista.splice(this.k, 1)
      }
    }
    this.localStorage();
  }

  mostrar() {
    if (this.formulario.invalid) {
      console.log("el formulario contiene errores");
    } else {
      console.log(this.formulario.value);
    }
  }
  anadir() {
    if (this.formulario1 == false) {
      this.formulario1 = true
    } else {
      if (this.formulario.valid) {
        this.formulario1 = false;
        this.toDo.push({ id: crypto.randomUUID(), nombre: this.formulario.get('nombre')?.value, descripcion: this.formulario.get('descripcion')?.value })
        this.formulario.reset({
          nombre: '',
          descripcion: ''
        });
        this.localStorage();
      }
    }
  }
  localStorage() {
    const datos = {
      toDo: this.toDo,
      doing: this.doing,
      done: this.done
    }
    localStorage.setItem('listas de tareas kanban', JSON.stringify(datos));
  }
}
