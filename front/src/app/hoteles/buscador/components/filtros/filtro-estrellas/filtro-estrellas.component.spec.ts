import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEstrellasComponent } from './filtro-estrellas.component';

describe('FiltroEstrellasComponent', () => {
  let component: FiltroEstrellasComponent;
  let fixture: ComponentFixture<FiltroEstrellasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEstrellasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
