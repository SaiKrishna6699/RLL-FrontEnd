import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusDetailsComponent } from './add-bus-details.component';

describe('AddBusDetailsComponent', () => {
  let component: AddBusDetailsComponent;
  let fixture: ComponentFixture<AddBusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
