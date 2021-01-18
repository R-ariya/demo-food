import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FoodResponse } from "../model/FoodModel.model.js";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(protected http: HttpClient) {
  }

  getFood() {
    return this.http
      .get(`${environment.apiUrl}/getFood`)
      .pipe(
        map((response: FoodResponse) => {
          return response.bodyRs;
        }, (error) => {

        })
      );
  }

  getFoodDetail(idFood: String) {
    return this.http
      .get(`${environment.apiUrl}/getFoodDetail/${idFood}`)
      .pipe(
        map((response: FoodResponse) => {
          return response.bodyRs;
        }, (error) => {

        })
      );
  }

}
