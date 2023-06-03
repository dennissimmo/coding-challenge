import { Component, Input } from '@angular/core';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  iconClassName: IconProp;

  @Input()
  title: string;

  @Input()
  subtitle: string;

}
