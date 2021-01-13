import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodPageService } from 'src/app/service/food-page.service';
import { FoodData, FoodOrder } from "../../../../model/FoodModel.model.js";
import { FoodOrderDetailComponent } from '../food-order-detail/food-order-detail.component.js';

@Component({
  selector: 'app-food-result-list',
  templateUrl: './food-result-list.component.html',
  styleUrls: ['./food-result-list.component.scss']
})
export class FoodResultListComponent implements OnInit {

  constructor(private foodService: FoodPageService, public dialog: MatDialog) { }
  @Output() foodListOut = new EventEmitter<FoodData[]>();
  @Output() foodOrderOut = new EventEmitter<any[]>();

  @Input() foodList: FoodData[] = [];
  @Input() foodOrder: any[] = [];

  // FoodOrder
  ngOnInit() {
    this.getFood()
  }

  async getFood() {
    await this.foodService.getFood().then(res => {
      console.log(res)
      this.foodList = res;
    }
      , (error) => {
        console.log(error)
      });
  }

  openInputDetail(event, current) {
    if (event.checked) {
      const dialogRef = this.dialog.open(FoodOrderDetailComponent, {
        width: '250px',
        data: this.foodOrder[current.id] ||
        {
          id: current.id,
          name: current.name,
          count: 0,
          ingredient1: false,
          ingredient2: false,
          ingredient3: false,
          ingredient4: false,
          remark: null
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.foodOrder[result.id] = result
          this.foodOrderOut.emit(this.foodOrder);
          current.isSelected = true
          current.count = result.count
          this.foodList[current.id] = current
          this.foodListOut.emit(this.foodList);
          // console.log("last order", this.foodOrder)
        } else {
          current.isSelected = false
          current.count = 0
          this.foodList[current.id] = current
          this.foodListOut.emit(this.foodList);
        }
      });
    } else {
      let newOrder = []
      Object.keys(this.foodOrder).forEach(element => {
        if (element != current.id) {
          newOrder[element] = this.foodOrder[element]
        }
      });
      this.foodOrder = newOrder
      this.foodOrderOut.emit(this.foodOrder);
      this.foodListOut.emit(this.foodList);
      // console.log("last order", this.foodOrder)
    }
  }

}
