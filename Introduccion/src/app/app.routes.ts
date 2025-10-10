import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Topo } from './topo/topo';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'topo', component: Topo}
];
