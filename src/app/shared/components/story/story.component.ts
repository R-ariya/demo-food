import { Component, OnInit } from '@angular/core';
import { StoryPageService } from 'src/app/service/story-page.service';
import { StoryResponse } from '../../../model/Story.model.js.js';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor(private storyService: StoryPageService) { }

  public storyResultList: StoryResponse;

  ngOnInit() {
    this.getStory()
  }

  async getStory() {
    await this.storyService.getStory().then(res => {
      this.storyResultList = res
    });
  }

}
