import {Category} from "./models";
import {LogState} from "../logs/state/state";

export interface CategoryState {
  list: Category[];
}

export interface AppState {
  categories: CategoryState;
  logs: LogState
}

export const initialState: CategoryState = {
    list: [
      {
        name: 'Food'
      },
      {
        name: 'Sport'
      },
      {
        name: 'Coffee'
      },
    ]
};
