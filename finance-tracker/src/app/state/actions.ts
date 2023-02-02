import {createAction, props} from "@ngrx/store";
import {Category} from "./models";

export const addCategory = createAction(
  "[Category List] Add category",
  props<{ category: Category }>()
);

export const editCategory = createAction(
  "[Category List] Edit category",
  props<{ name: string}>()
);

export const deleteCategory = createAction(
  "[Category List] Delete category",
  props<{ name: string}>()
);

export const deleteAllCategories = createAction(
  "[Category List] Delete all categories"
);
