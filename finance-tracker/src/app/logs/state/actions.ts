import {createAction, props} from "@ngrx/store";
import {Log} from "./state";

export const logsListLoaded = createAction(
  "[Logs] Logs List Loaded"
);

export const logsListLoadedSuccess = createAction(
  "[Logs] Logs List Loaded Success",
  props<{ payload: { logs: Log[],  } }>()
);

export const logsListLoadedError = createAction(
  "[Logs] Logs List Loaded Error",
  props<{ payload: { message?:string} }>()
);
