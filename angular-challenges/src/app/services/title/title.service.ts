import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  get title(): string {
    return this.document.title;
  }
}
