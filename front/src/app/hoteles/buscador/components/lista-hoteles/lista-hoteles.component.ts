import { Component, OnInit, Input, OnChanges } from '@angular/core';
import BaseResponse from 'src/app/shared/models/BaseResponse';

@Component({
  selector: 'lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.scss']
})
export class ListaHotelesComponent implements OnInit {

  @Input() list: BaseResponse<any>;
  constructor() { }

  ngOnInit() {
  }
  
  mostrarMasResultados() {
    return this.list && (this.list.page * this.list.pageSize < this.list.totalCount)
  }

}
