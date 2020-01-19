import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'filtro-nombre',
  templateUrl: './filtro-nombre.component.html',
  styleUrls: ['./filtro-nombre.component.scss']
})
export class FiltroNombreComponent implements OnInit {

  @Output("onFilterChange") onFilterChange: EventEmitter<any> = new EventEmitter();
  filterNameForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.filterNameForm = this.formBuilder.group({
      name: ''
    });
  }
  
  ngOnInit() {
  }

  filter() {
    this.onFilterChange.emit(this.filterNameForm.value)
  }

}
