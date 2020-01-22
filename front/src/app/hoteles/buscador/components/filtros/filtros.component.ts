import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import HotelFilter from '../../../models/HotelFilter';
import { HotelesService } from 'src/app/hoteles/services/hoteles.service';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
}
