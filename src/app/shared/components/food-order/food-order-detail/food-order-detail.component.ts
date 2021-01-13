import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FoodPageService } from 'src/app/service/food-page.service';
import { FoodResponse } from "../../../../model/FoodModel.model.js";

@Component({
  selector: 'app-food-order-detail',
  templateUrl: './food-order-detail.component.html',
  styleUrls: ['./food-order-detail.component.scss']
})
export class FoodOrderDetailComponent implements OnInit {
  subscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<FoodOrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private foodService: FoodPageService,
    private fb: FormBuilder
  ) {
  }

  loading = false
  from: FormGroup;
  foodDetail: FoodResponse = null;
  ingredient = []
  priceTotal = 0
  priceOfIngredient = 0
  ngOnInit() {
    this.getFoodDetail()
    this.initFrom()
  }

  initFrom() {
    this.from = this.fb.group({
      id: [this.data.id],
      name: [this.data.name],
      ingredient: [this.data.ingredient],
      price: [this.data.price],
      priceTotal: [this.data.priceTotal],
      ingredient1: [this.data.ingredient1 || false],
      ingredient2: [this.data.ingredient2 || false],
      ingredient3: [this.data.ingredient3 || false],
      ingredient4: [this.data.ingredient4 || false],
      remark: [this.data.remark],
      count: [this.data.count || 1, Validators.min(1)]
    });
  }

  onSelectIngredient(event, value, price) {
    if (event.checked)
      this.addIngredient(value, price)
    else
      this.deleteIngredient(value, price)

    this.from.get("ingredient").setValue(this.ingredient)
    this.onPriceChange()
  }

  onPriceChange() {
    this.priceTotal = (this.from.value.price || 0) * this.from.value.count
    this.priceTotal = this.priceTotal + this.priceOfIngredient
    this.from.get("priceTotal").setValue(this.priceTotal)
  }

  addIngredient(value, price) {
    if (!this.ingredient.includes(value))
      this.ingredient.push(value)
    this.priceOfIngredient = this.priceOfIngredient + price
  }

  deleteIngredient(value, price) {
    this.priceOfIngredient = this.priceOfIngredient - price
    let ingredient = []
    this.ingredient.forEach(element => {
      if (element != value)
        ingredient.push(element)
    });
    this.ingredient = ingredient
  }

  async getFoodDetail() {
    this.loading = true
    await this.foodService.getFoodDetail(this.data.id).then(res => {
      this.foodDetail = res
    });
    this.loading = false

  }

  onSubmit() {
    console.log(this.from.value)
    this.onClose()
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
