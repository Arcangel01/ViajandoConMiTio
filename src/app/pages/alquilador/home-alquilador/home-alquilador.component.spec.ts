import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlquiladorComponent } from './home-alquilador.component';

describe('HomeAlquiladorComponent', () => {
  let component: HomeAlquiladorComponent;
  let fixture: ComponentFixture<HomeAlquiladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlquiladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlquiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
