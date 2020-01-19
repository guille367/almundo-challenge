import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: 'buscar', pathMatch: 'full' },
  { path: 'buscar', component: BusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BuscadorRoutingModule { }