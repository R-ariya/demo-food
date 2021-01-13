export class Header {
  code = String;
  desc = String;
  serviceName = String;
}

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
  headerRs = Header;
  bodyRs = List[FoodData];
}
