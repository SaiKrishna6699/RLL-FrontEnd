import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassengerComponent } from './update-passenger.component';

describe('UpdatePassengerComponent', () => {
  let component: UpdatePassengerComponent;
  let fixture: ComponentFixture<UpdatePassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
