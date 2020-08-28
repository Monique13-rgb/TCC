import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPalestranteComponent } from './edit-palestrante.component';

describe('EditPalestranteComponent', () => {
  let component: EditPalestranteComponent;
  let fixture: ComponentFixture<EditPalestranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPalestranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPalestranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
