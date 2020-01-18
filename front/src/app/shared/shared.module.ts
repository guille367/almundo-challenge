import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstrellasComponent } from './components/estrellas/estrellas.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    EstrellasComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EstrellasComponent,
    IconComponent
  ]
})
export class SharedModule { }
