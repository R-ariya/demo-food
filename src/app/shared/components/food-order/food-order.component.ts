import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service.js';
import { FoodData } from "../../../model/FoodModel.model.js";

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.scss']
})
export class FoodOrderComponent implements OnInit, OnDestroy {
  constructor(private data: DataService) { }

  public foodListSelect: FoodData[] = [];
  public foodOrderList = [];
  public subscription: Subscription;

  ngOnInit() {
    this.subscription = this.data.currentfoodOrder.subscribe(res => {
      this.setSelect(Object.values(res))
    })
  }

  setSelect(res) {
    this.foodOrderList = res
    console.log(this.foodListSelect)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeOrder(value: any[]) {
    this.foodOrderList = value
    this.data.changeFoodOrder(this.foodOrderList)
    // console.log("onChangeOrder", value)
  }

}
