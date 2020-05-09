import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLinea1Component } from './grafico-linea1.component';

describe('GraficoLinea1Component', () => {
  let component: GraficoLinea1Component;
  let fixture: ComponentFixture<GraficoLinea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLinea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLinea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
