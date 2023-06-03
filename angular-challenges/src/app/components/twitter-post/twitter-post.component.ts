import { Component, Input } from '@angular/core';
import { TitleService } from "../../services/title/title.service";

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {

  @Input() baseHref: string;
  @Input() tags: string[];

  constructor(
    private _titleService: TitleService
  ) {
  }

  get twitterUrl(): string {
    const base = this.getBaseWithTags();
    const message = `Hi, it is message from ${this._titleService.title} web site`;

    return `${base}${message}`;
  }

  private getBaseWithTags(): string {
    const link = encodeURI(this.baseHref);
    const tags = this.tags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(tags)}&related=denys&url=${link}&text=`
  }

}
