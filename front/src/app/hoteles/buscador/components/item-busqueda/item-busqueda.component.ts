import { Component, OnInit, Input } from '@angular/core';
import Hotel from '../../../models/Hotel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'item-busqueda',
  templateUrl: './item-busqueda.component.html',
  styleUrls: ['./item-busqueda.component.scss']
})
export class ItemBusquedaComponent implements OnInit {

  @Input() hotel: Hotel;
  url: string;

  constructor() { 
    this.url = environment.apiUrl;
  }

  ngOnInit() {
  }

}
