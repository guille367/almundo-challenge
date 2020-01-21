import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HotelResponse } from 'src/app/hoteles/models/HotelResponse';

@Component({
  selector: 'lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.scss']
})
export class ListaHotelesComponent implements OnInit {

  @Input() hoteles: HotelResponse;
  constructor() { }

  ngOnInit() {
  }
  
  

}
