import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelesService } from 'src/app/hoteles/services/hoteles.service';

@Component({
  selector: 'filtro-estrellas',
  templateUrl: './filtro-estrellas.component.html',
  styleUrls: ['./filtro-estrellas.component.scss']
})
export class FiltroEstrellasComponent implements OnInit {

  cantidadEstrellasAFiltrar: Array<number>;
  stars: Array<number>;
  public isCollapsed = false;
  
  constructor(private hotelesService: HotelesService) { 
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

    this.hotelesService.updateFilter.emit({ stars: this.stars, page: 1 })
  }

  selectAll() {
    this.stars = []
    this.hotelesService.updateFilter.emit({ stars: this.stars, page: 1 })
  }

  isSelected(estrella) {
    return this.stars.find(e => e === estrella)
  }
}
