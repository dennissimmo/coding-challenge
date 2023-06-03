import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss']
})
export class LinkedinPostComponent {

  constructor(
    private _router: Router
  ) {
  }

  get linkedinUrl(): string {
    const linkedin = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://google.com.ua${encodeURI(this._router.url)}`

    return `${linkedin}${currentSite}`
  }
}
