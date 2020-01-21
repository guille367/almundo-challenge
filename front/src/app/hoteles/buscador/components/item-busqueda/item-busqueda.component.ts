import { Component, OnInit, Input } from '@angular/core';
import Hotel from '../../../models/Hotel';

@Component({
  selector: 'item-busqueda',
  templateUrl: './item-busqueda.component.html',
  styleUrls: ['./item-busqueda.component.scss']
})
export class ItemBusquedaComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.hotel)
  }

}
