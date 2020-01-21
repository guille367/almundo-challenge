import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ItemBusquedaComponent } from './components/item-busqueda/item-busqueda.component';
import { BusquedaComponent } from './components/busqueda.component';
import { BuscadorRoutingModule } from './buscador-routing.module';
import { FiltroNombreComponent } from './components/filtros/filtro-nombre/filtro-nombre.component';
import { FiltroEstrellasComponent } from './components/filtros/filtro-estrellas/filtro-estrellas.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaHotelesComponent } from './components/lista-hoteles/lista-hoteles.component';

@NgModule({
  declarations: [
    FiltrosComponent,
    ItemBusquedaComponent,
    BusquedaComponent,
    FiltroNombreComponent,
    FiltroEstrellasComponent,
    ListaHotelesComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BuscadorModule { }
