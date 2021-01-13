import { OnDestroy } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FoodPageService } from 'src/app/service/food-page.service';
import { FoodResponse } from "../../../../model/FoodModel.model.js";
import { DataService } from '../../../../service/data.service';

@Component({
  selector: 'app-food-order-detail',
  templateUrl: './food-order-detail.component.html',
  styleUrls: ['./food-order-detail.component.scss']
})
export class FoodOrderDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<FoodOrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private foodService: FoodPageService,
    private fb: FormBuilder,
    private dataService: DataService
  ) {
  }

  loading = false
  from: FormGroup;
  foodDetail: FoodResponse = null;
  ingredient = []
  ngOnInit() {
    this.getFoodDetail()
    this.initFrom()
    this.subscription = this.dataService.currentfIngredient.subscribe(res => this.ingredient = res)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initFrom() {

    this.from = this.fb.group({
      id: [this.data.id],
      name: [this.data.name],
      ingredient1: [this.data.ingredient1 || false],
      ingredient2: [this.data.ingredient2 || false],
      ingredient3: [this.data.ingredient3 || false],
      ingredient4: [this.data.ingredient4 || false],
      remark: [this.data.remark],
      count: [this.data.count || 1, Validators.min(1)]
    });
  }

  async getFoodDetail() {
    this.loading = true
    await this.foodService.getFoodDetail(this.data.id).then(res => {
      this.foodDetail = res
    });
    this.loading = false

    this.foodDetail.ingredient.forEach(element => {
      this.ingredient.push(element.name);
    });
    this.dataService.changeIngredient(this.ingredient);

  }

  onSubmit() {
    console.log(this.from.value)
    this.onClose()
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
