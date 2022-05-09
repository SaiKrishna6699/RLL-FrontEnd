import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserBookingsComponent } from './show-user-bookings.component';

describe('ShowUserBookingsComponent', () => {
  let component: ShowUserBookingsComponent;
  let fixture: ComponentFixture<ShowUserBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
