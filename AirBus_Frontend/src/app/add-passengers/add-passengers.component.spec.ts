import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassengersComponent } from './add-passengers.component';

describe('AddPassengersComponent', () => {
  let component: AddPassengersComponent;
  let fixture: ComponentFixture<AddPassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
