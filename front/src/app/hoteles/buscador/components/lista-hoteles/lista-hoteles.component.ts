import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Hotel from '../../../models/Hotel';

@Component({
  selector: 'lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.scss']
})
export class ListaHotelesComponent implements OnInit {

  @Input() hoteles: Array<Hotel>;
  constructor() { }

  ngOnInit() {
  }
  
  

}
