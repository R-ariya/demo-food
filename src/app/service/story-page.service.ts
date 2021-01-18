import { Injectable } from '@angular/core';
import { StoryService } from '../api/story.service';
import { StoryResponse } from '../model/Story.model.js.js';

@Injectable({
  providedIn: 'root'
})
export class StoryPageService {

  constructor(private storyService: StoryService) { }

  async getStory() {
    return await this.storyService.getStory().toPromise();
  }
}
