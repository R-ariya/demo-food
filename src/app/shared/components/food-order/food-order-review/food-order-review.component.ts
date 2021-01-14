import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/service/data.service.js';
import { FoodOrder } from "../../../../model/FoodModel.model.js";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-order-review',
  templateUrl: './food-order-review.component.html',
  styleUrls: ['./food-order-review.component.scss']
})
export class FoodOrderReviewComponent implements OnInit, OnDestroy {

  public orderList: any[] = [];
  public subscription: Subscription;
  public priceToltal;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentfoodOrder.subscribe(res => {
      this.setOrder(res)
    })
  }

  async setOrder(res) {
    this.orderList = await Object.values(res)
    this.priceToltal = 0.00
    console.log("orderList", this.orderList)
    this.orderList.forEach(element => {
      this.priceToltal = this.priceToltal + element.priceTotal
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
