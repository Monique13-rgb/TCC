import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgramacaoComponent } from './edit-programacao.component';

describe('EditProgramacaoComponent', () => {
  let component: EditProgramacaoComponent;
  let fixture: ComponentFixture<EditProgramacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgramacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
