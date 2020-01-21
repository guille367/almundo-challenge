import { Component, OnInit } from '@angular/core';
import HotelFilter from '../../models/HotelFilter';
import { HotelesService } from '../../services/hoteles.service';
import { HotelResponse } from '../../models/HotelResponse';

@Component({
  selector: 'busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  
  results: HotelResponse;
  constructor(private hotelesService: HotelesService) {
    
  }
  
  ngOnInit(): void {
    this.fetchHotels()
  }

  fetchHotels(filter?: HotelFilter) {
    this.hotelesService.getHoteles(filter)
      .subscribe((response) => {
        this.results = response;
      })
  }
}
