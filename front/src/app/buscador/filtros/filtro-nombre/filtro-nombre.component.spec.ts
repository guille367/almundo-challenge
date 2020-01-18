import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroNombreComponent } from './filtro-nombre.component';

describe('FiltroNombreComponent', () => {
  let component: FiltroNombreComponent;
  let fixture: ComponentFixture<FiltroNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
