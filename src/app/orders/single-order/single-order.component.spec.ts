import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrderComponent } from './single-order.component';

describe('CreateOrdersComponent', () => {
  let component: SingleOrderComponent;
  let fixture: ComponentFixture<SingleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleOrderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
