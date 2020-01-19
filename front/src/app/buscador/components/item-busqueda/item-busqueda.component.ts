import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-busqueda',
  templateUrl: './item-busqueda.component.html',
  styleUrls: ['./item-busqueda.component.scss']
})
export class ItemBusquedaComponent implements OnInit {

  amenities: Array<string>;

  constructor() { 
    this.amenities = ['bathtub', 'fitness-center', 'restaurant']
  }

  ngOnInit() {
  }

}
