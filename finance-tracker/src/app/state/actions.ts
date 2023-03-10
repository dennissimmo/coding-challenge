import {createAction, props} from "@ngrx/store";
import {Category} from "./models";

export const addCategory = createAction(
  "[Category List] Add category",
  props<{ category: Category }>()
);

export const categoryAddedSuccess = createAction(
  "[CategoryList] Add Category Success",
  props<{ payload: { data:Category; message?:string } }>()
);

export const categoryAddedError = createAction(
  "[CategoryList] Add Category Error",
  props<{ payload: { message?:string } }>()
);

export const editCategory = createAction(
  "[Category List] Edit category",
  props<{ name: string}>()
);

export const deleteCategory = createAction(
  "[Category List] Delete category",
  props<{ id: number | undefined}>()
);

export const categoryDeletedSuccess = createAction(
  "[CategoryList] Delete Category Success",
  props<{ payload: { message?:string } }>()
);

export const categoryDeletedError = createAction(
  "[CategoryList] Delete Category Error",
  props<{ payload: { message?:string } }>()
);

export const deleteAllCategories = createAction(
  "[Category List] Delete all categories"
);

export const categoriesListLoaded = createAction(
  "[CategoryList] Categories List Loaded",
);

export const loadCategoriesSuccess = createAction(
  "[CategoryList] Load Categories Success",
  props<{ payload: { categories: Category[], message?: string } }>()
);

export const loadCategoriesError = createAction(
  "[CategoryList] Load Categories Error",
  props<{ payload: { message?:string } }>()
);
