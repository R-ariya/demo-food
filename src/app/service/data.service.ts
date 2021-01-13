import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public foodOrder: any = []
  private foodOrderSource = new BehaviorSubject(this.foodOrder);
  currentfoodOrder = this.foodOrderSource.asObservable();

  constructor() { }

  changeFoodOrder(foodOrder: any) {
    this.foodOrderSource.next(foodOrder)
  }


}