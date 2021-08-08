import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlquiladorComponent } from './registro-alquilador.component';

describe('RegistroAlquiladorComponent', () => {
  let component: RegistroAlquiladorComponent;
  let fixture: ComponentFixture<RegistroAlquiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAlquiladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlquiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
