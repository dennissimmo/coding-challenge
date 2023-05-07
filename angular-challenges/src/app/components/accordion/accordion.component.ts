import { Component, Input } from '@angular/core';
import { AccordionItem } from "./accordion-item";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {


  @Input()
  items: AccordionItem[];

}
