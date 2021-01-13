import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
// import { FoodOrderComponent } from './shared/components/food-order/food-order.component';
import { FoodOrderReviewComponent } from './shared/components/food-order/food-order-review/food-order-review.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: FoodOrderReviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
