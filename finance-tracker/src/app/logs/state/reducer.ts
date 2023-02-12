import {createReducer, on} from "@ngrx/store";
import {initialState} from "./state";
import * as actions from "./actions";

export const logsReducer = createReducer(
  initialState,
  on(actions.logsListLoaded, (state) => ({
    ...state,
    loading: { ...state.loading, list: true }
  })),
  on(actions.logsListLoadedSuccess, (state, action) => ({
    ...state,
    logs: action.payload.logs,
    loading: { ...state.loading, add: false }
  }))
);

