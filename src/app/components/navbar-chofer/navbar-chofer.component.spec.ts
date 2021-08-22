import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChoferComponent } from './navbar-chofer.component';

describe('NavbarChoferComponent', () => {
  let component: NavbarChoferComponent;
  let fixture: ComponentFixture<NavbarChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
