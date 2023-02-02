import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {categories} from "../state/selectors";
import {AppState} from "../state/state";

@Component({
  selector: 'app-category-list-container',
  templateUrl: './category-list-container.component.html',
  styleUrls: ['./category-list-container.component.scss']
})
export class CategoryListContainerComponent {

  categories$ = this.store.select(categories);

  constructor(private readonly store: Store<AppState>) {
  }
}
