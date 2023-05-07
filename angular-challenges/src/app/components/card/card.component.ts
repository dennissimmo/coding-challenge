import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  faCoffee = faCoffee;

  @Input()
  iconClassName: IconProp;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
