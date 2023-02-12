import {createFeatureSelector, createSelector} from "@ngrx/store";

// export const logs = (state: AppState) => state.logs;

const logsFeature = createFeatureSelector("logsFeature");

// @ts-ignore
export const logs = createSelector(logsFeature, (state) => state.logs);

// @ts-ignore
export const loading = createSelector(logsFeature, (state) => state.loading);
