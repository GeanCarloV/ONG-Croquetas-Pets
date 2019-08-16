import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CserviciosComponent } from './cservicios.component';

describe('CserviciosComponent', () => {
  let component: CserviciosComponent;
  let fixture: ComponentFixture<CserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
