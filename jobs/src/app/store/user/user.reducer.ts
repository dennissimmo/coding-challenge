import {User} from './user.models';
import * as fromActions from './user.actions';
import {Action, createReducer, on} from "@ngrx/store";
import {from, of} from "rxjs";

export interface UserState {
    entity: User;
    uid: string;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    entity: null,
    uid: null,
    loading: null,
    error: null
};

export const userReducer = createReducer(
    initialState,
    on(fromActions.init, (state) => ({
        ...state, loading: true
    })),
    on(fromActions.initAuthorized, (state, { payload }) => ({
        ...state, entity: payload.user, loading: false, error:null
    })),
    on(fromActions.initUnAuthorized, (state) => ({
        ...state, entity: null, loading: false, error: null
    })),
    on(fromActions.initError, (state, { payload }) => ({
        ...state, error: payload.error
    })),
    on(fromActions.signInEmail, (state) => ({
        ...state, loading: true
    })),
    on(fromActions.signInEmailSuccess, (state, {payload}) => ({
        ...state, entity: payload.user, uid: payload.uid, loading: false, error: null
    })),
    on(fromActions.signInEmailError, (state, {payload}) => ({
        ...state, loading: false, error: payload.error
    })),
    on(fromActions.signUpEmail, (state) => ({
        ...state, loading: true
    })),
    on(fromActions.signUpEmailSuccess, (state, {payload}) => ({
        ...state, uid: payload.uid, loading: false
    })),
    on(fromActions.signUpEmailError, (state, {payload}) => ({
        ...state, loading: false, error: payload.error
    })),
    on(fromActions.signOut, (state) => ({
        ...state, loading: true
    })),
    on(fromActions.signOutSuccess, () => ({
        ...initialState
    })),
    on(fromActions.signOutError, (state, { payload }) => ({
        ...state, error: payload.error
    }))
);

export function reducer(state = initialState, action: Action) {
    return userReducer(state, action);
}
