import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEventosComponent } from './adicionar-eventos.component';

describe('AdicionarEventosComponent', () => {
  let component: AdicionarEventosComponent;
  let fixture: ComponentFixture<AdicionarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
