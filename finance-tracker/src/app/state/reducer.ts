import {AppState, initialState} from "./state";
import * as actions from "./actions";
import {Action, createReducer, on} from "@ngrx/store";

const _reducer = createReducer(
  initialState,
  on(actions.addCategory, (state, { category }) => ({
    ...state,
    categories: [...state.categories, category],
  })),
  on(actions.deleteCategory, (state, { name }) => ({
    ...state,
    categories: state.categories.filter(category => category.name !== name)
  })),
  on(actions.deleteAllCategories, (state) => ({
    ...state,
    categories: []
  }))
);

export function reducer(state: AppState, action: Action) {
  return _reducer(state, action);
}
