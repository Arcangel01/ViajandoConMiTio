import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChoferComponent } from './home-chofer.component';

describe('HomeChoferComponent', () => {
  let component: HomeChoferComponent;
  let fixture: ComponentFixture<HomeChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
