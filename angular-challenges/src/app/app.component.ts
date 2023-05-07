import { Component } from '@angular/core';
import { AccordionItem } from "./components/accordion/accordion-item.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-challenges';
  items: AccordionItem[] = [
    {
      title: 'Example 1',
      isExpanded: false,
      content: 'Example 1 Content'
    },
    {
      title: 'Example 2',
      isExpanded: false,
      content: 'Example 2 Content'
    }
  ];
}
