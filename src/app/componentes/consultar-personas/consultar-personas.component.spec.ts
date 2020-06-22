import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPersonasComponent } from './consultar-personas.component';

describe('ConsultarPersonasComponent', () => {
  let component: ConsultarPersonasComponent;
  let fixture: ComponentFixture<ConsultarPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
