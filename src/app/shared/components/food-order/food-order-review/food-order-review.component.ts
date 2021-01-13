import { OnDestroy } from '@angular/core/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.js';
import { FoodOrder } from "../../../../model/FoodModel.model.js";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-order-review',
  templateUrl: './food-order-review.component.html',
  styleUrls: ['./food-order-review.component.scss']
})
export class FoodOrderReviewComponent implements OnInit, OnDestroy {

  foodOrder: any[] = [];
  ingredient: any[] = [];

  subscription: Subscription;
  subscriptionIngredient: Subscription;

  constructor(private data: DataService) { }

  async ngOnInit() {
    this.subscription = await this.data.currentfoodOrder.subscribe(res => this.onChangeFoodOrder(res))
    this.subscriptionIngredient = await this.data.currentfIngredient.subscribe(res => this.onChangeIngredien(res))
  }

  onChangeFoodOrder(value) {
    this.foodOrder = value
    console.log("onChangeOrder", this.foodOrder)
    return this.foodOrder;
  }

  onChangeIngredien(value) {
    this.ingredient = value
    console.log("onChangeOrder", this.ingredient)
    return this.ingredient;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionIngredient.unsubscribe()
  }
}
