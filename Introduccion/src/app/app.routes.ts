import { Routes } from '@angular/router';
import { FormularioRegistro } from './Components/formulario-registro/formulario-registro';
import { Contador } from './Components/contador/contador';
import { Lista } from './Components/ListaPersonajes/lista/lista';
import { Topo } from './Components/topo/topo';
import { Halloween } from './Components/halloween/halloween';
import { TableroKanban } from './Components/tablero-kanban/tablero-kanban';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'lista', component: Lista},
    { path: 'matatopos', component: Topo},
    { path: 'formulario-registro', component: FormularioRegistro}, 
    { path: 'halloween', component: Halloween},
    { path: 'kanban', component: TableroKanban},
];