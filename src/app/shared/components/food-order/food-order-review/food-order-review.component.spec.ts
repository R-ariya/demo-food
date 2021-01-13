/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodOrderReviewComponent } from './food-order-review.component';

describe('FoodOrderReviewComponent', () => {
  let component: FoodOrderReviewComponent;
  let fixture: ComponentFixture<FoodOrderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodOrderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
