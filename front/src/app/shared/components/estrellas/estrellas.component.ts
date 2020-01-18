import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.scss']
})
export class EstrellasComponent implements OnInit {

  @Input() cantidad: number;
  estrellas : Array<number>;

  constructor() { 
    
  }

  ngOnInit() {
    this.estrellas = new Array(this.cantidad);
  }

}
