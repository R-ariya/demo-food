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
      this.foodList = res;
    }
      , (error) => {
        console.log(error)
      });



  }

  setImg(id, path) {
    // let item = document.getElementsByClassName('tumnail')
    // for (let index = 0; index < this.foodList.length; index++) {
    //   const element = this.foodList[index];
    let item = document.getElementById(id)
    if (path && item) {
      document.getElementById(id).style.backgroundImage = `url('${path}')`;
      console.log(document.getElementById(id).style)
    }
    // }
  }

  openInputDetail(event, current) {
    if (event.checked) {
      const dialogRef = this.dialog.open(FoodOrderDetailComponent, {
        width: '250px',
        data: this.foodOrder[current.id] ||
        {
          id: current.id,
          name: current.name,
          price: current.price,
          priceTotal: current.price,
          count: 0,
          ingredient: [],
          ingredient1: false,
          ingredient2: false,
          ingredient3: false,
          ingredient4: false,
          remark: null
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result) {
          this.foodOrder[result.id] = result
          current.isSelected = true
          current.count = result.count
          this.foodList[current.id] = current
          this.emitFrom();
          // console.log("last order", this.foodOrder)
        } else {
          current.isSelected = false
          current.count = 0
          this.foodList[current.id] = current
          this.emitFrom();
        }
      });
    } else {
      let newOrder = []
      this.foodOrder.forEach(element => {
        // console.log(element.id, current.id, (element.id != current.id))
        if (element.id != current.id) {
          newOrder.push(element)
        }
      });
      this.foodOrder = newOrder
      console.log("last order", this.foodOrder)
      this.emitFrom();
    }
  }

  emitFrom() {
    this.foodOrderOut.emit(this.foodOrder);
    this.foodListOut.emit(this.foodList);
  }


}
