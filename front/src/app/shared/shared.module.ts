import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstrellasComponent } from './components/estrellas/estrellas.component';

@NgModule({
  declarations: [
    EstrellasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EstrellasComponent
  ]
})
export class SharedModule { }
