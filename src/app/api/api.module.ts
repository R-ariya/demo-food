import { FoodService } from './../service/food.service';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    FoodService,]
})


export class ApiModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }

}
