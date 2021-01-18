import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StoryResponse } from "../model/Story.model.js";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(protected http: HttpClient) {
  }
  getStory() {
    return this.http
      .get(`${environment.apiUrl}/getStory`)
      .pipe(
        map((response: StoryResponse) => {
          return response.bodyRs;
        }, (error) => {

        })
      );
  }
}
