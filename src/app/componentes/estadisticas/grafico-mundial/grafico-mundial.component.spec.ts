import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMundialComponent } from './grafico-mundial.component';

describe('GraficoMundialComponent', () => {
  let component: GraficoMundialComponent;
  let fixture: ComponentFixture<GraficoMundialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoMundialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoMundialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
