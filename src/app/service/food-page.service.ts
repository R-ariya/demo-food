import { FoodService } from '../api/food.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodPageService {

  constructor(private foodService: FoodService) { }

  async getFood() {
    return await this.foodService.getFood().toPromise();
  }

  async getFoodDetail(idFood: String) {
    return await this.foodService.getFoodDetail(idFood).toPromise();
  }

}
