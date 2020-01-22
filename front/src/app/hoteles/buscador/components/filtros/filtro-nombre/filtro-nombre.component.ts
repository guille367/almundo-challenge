import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelesService } from 'src/app/hoteles/services/hoteles.service';

@Component({
  selector: 'filtro-nombre',
  templateUrl: './filtro-nombre.component.html',
  styleUrls: ['./filtro-nombre.component.scss']
})
export class FiltroNombreComponent implements OnInit {

  filterNameForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private hotelesService: HotelesService) { 
    this.filterNameForm = this.formBuilder.group({
      name: '',
      page: 1
    });
  }
  
  ngOnInit() {
  }

  filter() {
    this.hotelesService.updateFilter.emit(this.filterNameForm.value)
  }

}
