import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import HotelFilter from '../../../models/HotelFilter';
import { HotelesService } from 'src/app/hoteles/services/hoteles.service';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  @Output("filterResults") filterResults: EventEmitter<HotelFilter> = new EventEmitter<HotelFilter>();
  filter: HotelFilter;

  constructor(private hotelesService: HotelesService) { 
    this.filter = new HotelFilter();

    this.hotelesService.onFilterUpdate
      .subscribe(values => this.onFilterChange(values))
  }

  ngOnInit() {
  }

  onFilterChange(values) {
    this.filter = { ...this.filter, ...values }
    this.filterResults.emit(this.filter)
  }

}
