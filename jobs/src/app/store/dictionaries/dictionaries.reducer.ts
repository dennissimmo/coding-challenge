import { Dictionaries } from "@app/store/dictionaries/dictionaries.models";
import * as fromActions from './dictionaries.actions';
import {Action, createReducer, on} from "@ngrx/store";

export interface DictionariesState {
    entities: Dictionaries;
    loading: boolean;
    error: string;
}

const initialState: DictionariesState = {
    entities: null,
    loading: null,
    error: null
};

const dictionariesReducer = createReducer(
    initialState,
    on(fromActions.readDictionary, (state) => {
        return { ...state, loading: true, error: null }
    }),
    on(fromActions.readDictionarySuccess, (state, { payload }) => {
        return { ...state, entities: payload.dictionaries, loading: false}
    }),
    on(fromActions.readDictionaryError, (state, { payload }) => ({
        ...state, entities: null, loading: false, error: payload.error
    })),
);

export function reducer(state: DictionariesState | undefined, action: Action) {
    return dictionariesReducer(state, action);
}
