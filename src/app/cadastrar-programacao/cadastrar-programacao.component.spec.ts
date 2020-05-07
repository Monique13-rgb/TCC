import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProgramacaoComponent } from './cadastrar-programacao.component';

describe('CadastrarProgramacaoComponent', () => {
  let component: CadastrarProgramacaoComponent;
  let fixture: ComponentFixture<CadastrarProgramacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarProgramacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
