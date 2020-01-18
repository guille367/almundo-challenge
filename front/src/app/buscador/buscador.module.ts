import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ItemBusquedaComponent } from './item-busqueda/item-busqueda.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BuscadorRoutingModule } from './buscador-routing.module';

@NgModule({
  declarations: [
    FiltrosComponent,
    ResultadosComponent,
    ItemBusquedaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule
  ]
})
export class BuscadorModule { }
