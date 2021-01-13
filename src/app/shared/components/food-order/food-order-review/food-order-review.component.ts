import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/service/data.service.js';
import { FoodOrder } from "../../../../model/FoodModel.model.js";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-order-review',
  templateUrl: './food-order-review.component.html',
  styleUrls: ['./food-order-review.component.scss']
})
export class FoodOrderReviewComponent implements OnInit, OnDestroy {

  @Input()
  set foodOrder(event: []) {
    console.log("event", event)
  }

  public orderList: any[] = [];
  public subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentfoodOrder.subscribe(res => {
      this.setOrder(res)
    })
  }

  async setOrder(res) {
    this.orderList = await Object.values(res)
    console.log("orderList", this.orderList)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
