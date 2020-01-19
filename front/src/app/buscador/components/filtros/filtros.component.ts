import { Component, OnInit } from '@angular/core';
import HotelFilter from '../../models/HotelFilter';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  filter: HotelFilter;

  constructor() { 
    this.filter = new HotelFilter();
  }

  ngOnInit() {
    console.log(this.filter)
  }

  onFilterChange(values) {
    this.filter = { ...this.filter, ...values }
    console.log(values, this.filter)
  }

}
