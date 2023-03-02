import {createAction, props} from "@ngrx/store";
import {EmailPasswordCredentials, User} from "@app/store/user/user.models";

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
