import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBusDetailsComponent } from './view-all-bus-details.component';

describe('ViewAllBusDetailsComponent', () => {
  let component: ViewAllBusDetailsComponent;
  let fixture: ComponentFixture<ViewAllBusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
