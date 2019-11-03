import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrdersComponent } from './create-orders.component';

describe('CreateOrdersComponent', () => {
  let component: CreateOrdersComponent;
  let fixture: ComponentFixture<CreateOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
