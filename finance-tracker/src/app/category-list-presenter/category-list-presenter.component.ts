import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../state/models";

@Component({
  selector: 'app-category-list-presenter',
  templateUrl: './category-list-presenter.component.html',
  styleUrls: ['./category-list-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListPresenterComponent {

  categoryName!: string;

  @Input() categories: Category[] | null = [];
  @Output() categoryAdded = new EventEmitter<Category>();
  @Output() categoryRemoved = new EventEmitter<Category>();

  addCategory() {
    this.categoryAdded.emit({ name: this.categoryName });
    this.categoryName = '';
  }

  deleteCategory(category: Category) {
    this.categoryRemoved.emit(category);
  }
}
