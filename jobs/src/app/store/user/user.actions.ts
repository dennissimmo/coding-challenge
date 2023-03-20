import {createAction, props} from "@ngrx/store";
import { EmailPasswordCredentials, User, UserCreateRequest } from "@app/store/user/user.models";

export const init = createAction(
      "[User] Init: Start"
);

export const initAuthorized = createAction(
    "[User] Init: Authorized",
    props<{ payload: { uid:string, user: User }}>()
);

export const initUnAuthorized = createAction(
    "[User] Init: Unauthorized"
);

export const initError = createAction(
    "[User] Init: Error",
    props<{ payload: { error: string } }>()
);

export const signInEmail = createAction(
    '[User] Sign In with email: Start',
    props<{ payload: { credentials: EmailPasswordCredentials } }>()
);

export const signInEmailSuccess = createAction(
    '[User] Sign In with email: Success',
    props<{
        payload: {
            uid: string,
            user: User
        }
    }>()
);

export const signInEmailError = createAction(
    '[User] Sign In with email: Error',
    props<{ payload: { error: string } }>()
);

export const signUpEmail = createAction(
    '[User] Sign Up with email: Start',
    props<{ payload: { credentials: EmailPasswordCredentials } }>()
);

export const signUpEmailSuccess = createAction(
    '[User] Sign Up with email: Success',
    props<{ payload: { uid: string } }>()
);

export const signUpEmailError = createAction(
    '[User] Sign Up with email: Error',
    props<{ payload: { error: string } }>()
);

export const signOut = createAction(
    '[User] Sign Out : Start',
);

export const signOutSuccess = createAction(
    '[User] Sign Out : Success'
);

export const signOutError = createAction(
    '[User] Sign Out : Error',
    props<{ payload: { error: string } }>()
);


export const create = createAction(
    '[User] Create : Start',
    props<{ payload: { user: UserCreateRequest }}>()
);

export const createSuccess = createAction(
    '[User] Create : Success',
    props<{ payload: { user: User } }>()
);

export const createError = createAction(
    '[User] Create : Error',
    props<{ payload: { error: string } }>()
);

export const update = createAction(
    '[User] Update : Start',
    props<{ payload: { user: User }}>()
);

export const updateSuccess = createAction(
    '[User] Update : Success',
    props<{ payload: { user: User } }>()
);

export const updateError = createAction(
    '[User] Update : Error',
    props<{ payload: { error: string } }>()
);

