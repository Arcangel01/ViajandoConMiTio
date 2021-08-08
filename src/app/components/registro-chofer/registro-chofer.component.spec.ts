import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroChoferComponent } from './registro-chofer.component';

describe('RegistroChoferComponent', () => {
  let component: RegistroChoferComponent;
  let fixture: ComponentFixture<RegistroChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
