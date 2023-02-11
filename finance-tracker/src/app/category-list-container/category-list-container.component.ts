import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {categories} from "../state/selectors";
import {AppState} from "../state/state";
import {Category} from "../state/models";
import {addCategory, categoriesListLoaded, deleteCategory} from "../state/actions";

@Component({
  selector: 'app-category-list-container',
  templateUrl: './category-list-container.component.html',
  styleUrls: ['./category-list-container.component.scss']
})
export class CategoryListContainerComponent implements OnInit {

  categories$ = this.store.select(categories);

  constructor(
    private readonly store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.categories$.subscribe(cat => console.log(cat));
  }

  ngOnInit() {
    this.store.dispatch(categoriesListLoaded());
  }

  onCategoryAdded(category: Category) {
    console.log(category);
    this.store.dispatch(addCategory({ category: category }));
    this.changeDetectorRef.detectChanges();
  }

  onCategoryRemoved(category: Category) {
    this.store.dispatch(deleteCategory({ id: category.id }));
  }
}
