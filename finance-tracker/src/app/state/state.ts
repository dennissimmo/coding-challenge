export interface Category {
  name: string
}

export interface AppState {
  categories: Category[];
}

export const initialState: AppState = {
    categories: []
};
