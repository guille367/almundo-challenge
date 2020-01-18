import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ItemBusquedaComponent } from './item-busqueda/item-busqueda.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import { FiltroNombreComponent } from './filtros/filtro-nombre/filtro-nombre.component';
import { FiltroEstrellasComponent } from './filtros/filtro-estrellas/filtro-estrellas.component';

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
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
