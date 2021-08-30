import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilarAutoComponent } from './alquilar-auto.component';

describe('AlquilarAutoComponent', () => {
  let component: AlquilarAutoComponent;
  let fixture: ComponentFixture<AlquilarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquilarAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
