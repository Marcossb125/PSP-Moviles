import { Routes } from '@angular/router';
import { FormularioRegistro } from './formulario-registro/formulario-registro';
import { Contador } from './contador/contador';
import { Lista } from './ListaPersonajes/lista/lista';
import { Topo } from './topo/topo';
import { Halloween } from './halloween/halloween';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'lista', component: Lista},
    { path: 'matatopos', component: Topo},
    { path: 'formulario-registro', component: FormularioRegistro}, 
    { path: 'halloween', component: Halloween},
];