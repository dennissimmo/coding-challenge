import {AppState, initialState} from "./state";
import * as actions from "./actions";
import { ActionReducerMap, createReducer, on} from "@ngrx/store";

const _categoryReducer = createReducer(
  initialState,
  on(actions.addCategory, (state, { category }) => ({
    ...state,
    categories: [...state.list, category],
  })),
  on(actions.deleteCategory, (state, { name }) => ({
    ...state,
    categories: state.list.filter(category => category.name !== name)
  })),
  on(actions.deleteAllCategories, (state) => ({
    ...state,
    categories: []
  }))
);

// export function reducer(state: CategoryState, action: Action) {
//   return _categoryReducer(state, action);
// }

export const reducers: ActionReducerMap<AppState> = {
  categories: _categoryReducer
}

