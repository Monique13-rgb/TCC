import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProgramacaoComponent } from './lista-programacao.component';

describe('ListaProgramacaoComponent', () => {
  let component: ListaProgramacaoComponent;
  let fixture: ComponentFixture<ListaProgramacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProgramacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
