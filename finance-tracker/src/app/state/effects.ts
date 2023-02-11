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

@Injectable()
export class CategoriesEffects {

  categoriesListLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriesListLoaded),
      mergeMap(() =>
        this.categoriesService.getCategories().pipe(
          tap((content) => console.log(content)),
          map((categories) => loadCategoriesSuccess({ payload: categories })),
          catchError(() => of(loadCategoriesError()))
        )
      )
    )
  );

  categoryAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategory),
      mergeMap(action => {
        return this.categoriesService.addCategory(action.category).pipe(
          map(_ => categoryAddedSuccess()),
          catchError(_ => of(categoryAddedError()))
        )
      })
    )
  );

  categoryRemoved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCategory),
      mergeMap(action => {
        return this.categoriesService.deleteCategory(Number(action.id)).pipe(
          map(_ => categoryDeletedSuccess()),
          catchError(_ => of(categoryDeletedError()))
        )
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly categoriesService: CategoryService
  ) {
  }


}
