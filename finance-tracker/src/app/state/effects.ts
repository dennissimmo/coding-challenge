import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CategoryService} from "../services/category.service";
import {
  addCategory,
  categoriesListLoaded, categoryAddedError,
  categoryAddedSuccess, categoryDeletedError, categoryDeletedSuccess, deleteCategory,
  loadCategoriesError,
  loadCategoriesSuccess
} from "./actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {categories} from "./selectors";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class CategoriesEffects {

  categoriesListLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriesListLoaded),
      mergeMap(() =>
        this.categoriesService.getCategories().pipe(
          tap((content) => console.log(content)),
          map((categories) => loadCategoriesSuccess({ payload: { categories, message: 'Categories Loaded Successfully' } })),
          catchError(() => of(loadCategoriesError({ payload: { message: 'Categories Loading Error'} })))
        )
      )
    )
  );

  categoryAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategory),
      mergeMap(({ category }) => {
        return this.categoriesService.addCategory(category).pipe(
          map(_ => categoryAddedSuccess({ payload: { data: category, message: 'Category Added successfully' } })),
          tap(result => console.log(result)),
          catchError(_ => of(categoryAddedError({ payload: { message: 'Category Adding Error'} })))
        )
      })
    )
  );

  categoryRemoved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCategory),
      mergeMap(action => {
        return this.categoriesService.deleteCategory(Number(action.id)).pipe(
          map(_ => categoryDeletedSuccess({ payload: { message: 'Category Deleted Successfully' } })),
          catchError(_ => of(categoryDeletedError({ payload: { message: 'Category Deleting Error'} })))
        )
      })
    )
  );

  handleSuccessMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAddedSuccess, categoryDeletedSuccess, loadCategoriesSuccess),
      tap(({ payload }) => {
        console.log('tap inside category added effect'),
        this.snackBar.open(payload.message!, "Dismiss", { duration: 2000 });
      })
    ), { dispatch:false});

  handleErrorMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAddedError, categoryDeletedError, loadCategoriesError),
      tap(({ payload }) => {
        console.log('tap inside category added effect'),
          this.snackBar.open(payload.message!, "Dismiss", { duration: 2000 });
      })
    ), { dispatch:false});

  constructor(
    private readonly actions$: Actions,
    private readonly categoriesService: CategoryService,
    private readonly snackBar: MatSnackBar
  ) {
  }


}
