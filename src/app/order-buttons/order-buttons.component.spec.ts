import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderButtonsComponent } from './order-buttons.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OrderButtonsComponent', () => {
  let component: OrderButtonsComponent;
  let fixture: ComponentFixture<OrderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderButtonsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
