import { Component, Input } from '@angular/core';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  faCoffee = faCoffee;

  @Input()
  iconClassName: IconProp;

  @Input()
  title: string;

  @Input()
  subtitle: string;

}
