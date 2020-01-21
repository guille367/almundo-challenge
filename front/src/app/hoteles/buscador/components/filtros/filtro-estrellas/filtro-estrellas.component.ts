import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtro-estrellas',
  templateUrl: './filtro-estrellas.component.html',
  styleUrls: ['./filtro-estrellas.component.scss']
})
export class FiltroEstrellasComponent implements OnInit {

  @Output("onFilterChange") onFilterChange: EventEmitter<any> = new EventEmitter();
  cantidadEstrellasAFiltrar: Array<number>;
  stars: Array<number>;
  
  constructor() { 
    this.cantidadEstrellasAFiltrar = [5,4,3,2,1];
    this.stars = []
  }
  
  ngOnInit() {
  }

  toggleEstrellaFilter(filtroSeleccionado, checked) {
    if(checked) {
      this.stars = [...this.stars, filtroSeleccionado]
    }
    else {
      this.stars = this.stars.filter(estrellas => estrellas !== filtroSeleccionado)
    }

    this.onFilterChange.emit({ stars: this.stars })
  }

  selectAll() {
    this.stars = []
    this.onFilterChange.emit({ stars: this.stars })
  }

  isSelected(estrella) {
    return this.stars.find(e => e === estrella)
  }
}
