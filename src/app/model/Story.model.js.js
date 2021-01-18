import { HeaderRs } from "./Base.model";

export class StoryResponse {
  headerRs = HeaderRs;
  bodyRs =
    List[
      {
        title: String,
        subTitle: String,
        detail: Array,
        tumnail: Array,
      }
    ];
}
