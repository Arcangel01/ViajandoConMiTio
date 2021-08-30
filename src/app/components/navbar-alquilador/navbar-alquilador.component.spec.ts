import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAlquiladorComponent } from './navbar-alquilador.component';

describe('NavbarAlquiladorComponent', () => {
  let component: NavbarAlquiladorComponent;
  let fixture: ComponentFixture<NavbarAlquiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAlquiladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAlquiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
