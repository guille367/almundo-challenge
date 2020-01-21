import { Component, OnInit } from '@angular/core';
import HotelFilter from '../models/HotelFilter';
import { HotelesService } from '../../services/hoteles.service';

@Component({
  selector: 'busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  
  constructor(private hotelesService: HotelesService) {
    
  }
  
  ngOnInit(): void {
    this.fetchHotels({})
  }

  fetchHotels(filter) {
    console.log(filter)
    this.hotelesService.getHoteles(filter)
      .subscribe((response) => {
        console.log(response)
      })
  }
}
