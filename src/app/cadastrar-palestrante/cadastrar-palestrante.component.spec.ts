import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPalestranteComponent } from './cadastrar-palestrante.component';

describe('CadastrarPalestranteComponent', () => {
  let component: CadastrarPalestranteComponent;
  let fixture: ComponentFixture<CadastrarPalestranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPalestranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPalestranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
