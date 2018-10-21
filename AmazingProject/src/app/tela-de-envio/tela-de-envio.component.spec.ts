import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeEnvioComponent } from './tela-de-envio.component';

describe('TelaDeEnvioComponent', () => {
  let component: TelaDeEnvioComponent;
  let fixture: ComponentFixture<TelaDeEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
