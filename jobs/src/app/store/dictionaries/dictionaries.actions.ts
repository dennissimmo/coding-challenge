import {createAction, props} from "@ngrx/store";
import {Dictionaries} from "@app/store/dictionaries/dictionaries.models";

export const readDictionary = createAction(
    "[Dictionaries] Read: Start"
);

export const readDictionarySuccess = createAction(
    "[Dictionaries] Read: Success",
    props<{ payload: { dictionaries: Dictionaries } }>()
);

export const readDictionaryError = createAction(
    "[Dictionaries] Read: Error",
    props<{ payload: { error: string } }>()
);
