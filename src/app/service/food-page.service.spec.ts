/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodPageService } from './food-page.service';

describe('Service: Food', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodPageService]
    });
  });

  it('should ...', inject([FoodPageService], (service: FoodPageService) => {
    expect(service).toBeTruthy();
  }));
});
