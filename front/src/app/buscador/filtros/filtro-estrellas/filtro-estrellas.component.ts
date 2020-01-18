import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtro-estrellas',
  templateUrl: './filtro-estrellas.component.html',
  styleUrls: ['./filtro-estrellas.component.scss']
})
export class FiltroEstrellasComponent implements OnInit {

  cantidadEstrellasAFiltrar: Array<number>;
  
  constructor() { 
    this.cantidadEstrellasAFiltrar = [5,4,3,2,1];
  }
  
  ngOnInit() {
  }

}
