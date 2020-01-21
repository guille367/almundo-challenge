import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import HotelFilter from '../../models/HotelFilter';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  @Output("filterResults") filterResults: EventEmitter<HotelFilter> = new EventEmitter<HotelFilter>();
  filter: HotelFilter;

  constructor() { 
    this.filter = new HotelFilter();
  }

  ngOnInit() {
  }

  onFilterChange(values) {
    this.filter = { ...this.filter, ...values }
    this.filterResults.emit(this.filter)
  }

}
