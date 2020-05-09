import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLinea2Component } from './grafico-linea2.component';

describe('GraficoLinea2Component', () => {
  let component: GraficoLinea2Component;
  let fixture: ComponentFixture<GraficoLinea2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLinea2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLinea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
