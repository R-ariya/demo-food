import { StoryComponent } from './components/story/story.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FoodOrderComponent } from './components/food-order/food-order.component';
import { BrowserModule } from '@angular/platform-browser';
import { FoodOrderDetailComponent } from './components/food-order/food-order-detail/food-order-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodResultListComponent } from './components/food-order/food-result-list/food-result-list.component';
import { FoodOrderReviewComponent } from './components/food-order/food-order-review/food-order-review.component';
import { FootterComponent } from './components/footter/footter.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FoodOrderComponent,
    FoodOrderDetailComponent,
    FoodResultListComponent,
    FoodOrderReviewComponent,
    StoryComponent,
    FootterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FoodOrderComponent,
    FoodOrderReviewComponent,
    StoryComponent,
    FootterComponent
  ],
  entryComponents: [

  ],
  providers: [
  ]
})
export class SharedModule { }
