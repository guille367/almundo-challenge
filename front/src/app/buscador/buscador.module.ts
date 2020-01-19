import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ItemBusquedaComponent } from './components/item-busqueda/item-busqueda.component';
import { BusquedaComponent } from './components/busqueda.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import { FiltroNombreComponent } from './components/filtros/filtro-nombre/filtro-nombre.component';
import { FiltroEstrellasComponent } from './components/filtros/filtro-estrellas/filtro-estrellas.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FiltrosComponent,
    ResultadosComponent,
    ItemBusquedaComponent,
    BusquedaComponent,
    FiltroNombreComponent,
    FiltroEstrellasComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BuscadorModule { }
