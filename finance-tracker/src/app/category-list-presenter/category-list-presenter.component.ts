import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Category} from "../state/models";

@Component({
  selector: 'app-category-list-presenter',
  templateUrl: './category-list-presenter.component.html',
  styleUrls: ['./category-list-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListPresenterComponent {

  @Input() categories: Category[] | null = [];

}
