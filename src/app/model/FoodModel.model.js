import { HeaderRs,HeaderRq } from './Base.model';

export class FoodData {
  id = String;
  name = String;
  detail = String;
  photo = String;
  price = Number;
  flagOrder = Boolean;
  ingredient = [
    {
      name:String,
      price:Number
    }
  ]
}

export class FoodOrder {
  id = String;
  price = Number;
  ingredient=[{
    name: String,
  }];
  remark = String;
  count = Number;
}

export class FoodResponse {
  headerRs = HeaderRs;
  bodyRs = List[FoodData];
}

export class FoodOrderRequest {
  headerRq = HeaderRq;
  bodyRq = List[
    {
      id = String,
      name = String,
      remark = String,
      count = String,
      ingredient = [
        {
          id:String,
          name:String,
        }
      ]
    }
  ];
}