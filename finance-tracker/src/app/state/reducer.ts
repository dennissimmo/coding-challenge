import {AppState, initialState} from "./state";
import * as actions from "./actions";
import { ActionReducerMap, createReducer, on} from "@ngrx/store";
import {categoriesListLoaded} from "./actions";

const _categoryReducer = createReducer(
  initialState,
  on(actions.addCategory, (state, { category }) => {
    console.log('add category action triggered');
    return {
      ...state,
      list: [...state.list, category],
    }
  }),
  on(actions.deleteCategory, (state, { id }) => ({
    ...state,
    list: state.list.filter(category => category.id !== id)
  })),
  on(actions.deleteAllCategories, (state) => ({
    ...state,
    list: []
  })),
  on(actions.loadCategoriesSuccess, (state, action) => ({
    ...state,
    list: action.payload.categories,
  }))
);

// export function reducer(state: CategoryState, action: Action) {
//   return _categoryReducer(state, action);
// }

export const reducers: ActionReducerMap<AppState> = {
  categories: _categoryReducer
}

