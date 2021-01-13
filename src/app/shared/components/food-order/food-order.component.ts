import { OnDestroy } from '@angular/core/core';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  subscription: Subscription;

  foodListSelect: FoodData[] = [];
  foodOrderList: any[] = [];
  orderNow: Number = 0;


  ngOnInit() {
    this.subscription = this.data.currentfoodOrder.subscribe(res => this.foodOrderList = res)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeOrder(value) {
    this.foodOrderList = value
    this.orderNow = this.foodOrderList.length
    this.data.changeFoodOrder(this.foodOrderList)
    // console.log("onChangeOrder", value)
  }

}
