import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private foodOrderSource = new BehaviorSubject([]);
  currentfoodOrder = this.foodOrderSource.asObservable();

  private ingredientSource = new BehaviorSubject([]);
  currentfIngredient = this.ingredientSource.asObservable();

  constructor() { }

  changeFoodOrder(foodOrder: any[]) {
    this.foodOrderSource.next(foodOrder)
  }

  changeIngredient(ingredient: any[]) {
    this.ingredientSource.next(ingredient)
  }

}