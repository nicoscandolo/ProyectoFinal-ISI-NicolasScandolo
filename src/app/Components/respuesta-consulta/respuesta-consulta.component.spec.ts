import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaConsultaComponent } from './respuesta-consulta.component';

describe('RespuestaConsultaComponent', () => {
  let component: RespuestaConsultaComponent;
  let fixture: ComponentFixture<RespuestaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
