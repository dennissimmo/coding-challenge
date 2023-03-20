import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as fromActions from "./user.actions";
import {signUpEmail} from "./user.actions";
import {Router} from "@angular/router";
import {NotificationService} from "@app/services";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { catchError, map, switchMap, take, tap, withLatestFrom } from "rxjs/operators";
import {from, of} from "rxjs";
import {environment} from "@env/environment";
import { User } from "@app/models/backend";
import firebase from "firebase/compat";
import firestore = firebase.firestore;

@Injectable()
export class UserEffects {

    constructor(
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private actions$: Actions,
        private router: Router,
        private notificationService: NotificationService
    ) {

    }

    init = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.init),
            switchMap(() => this.afAuth.authState.pipe(take(1))),
            switchMap(authState => {
                if (authState) {
                    return this.afs.doc<User>(`users/${authState.uid}`).valueChanges().pipe(
                        take(1),
                        map(user => fromActions.initAuthorized({
                            payload: {
                                uid: authState.uid,
                                user: user || null
                            }
                        })),
                        catchError(err => of(fromActions.initError({ payload: { error: err.message } })))
                    );
                } else {
                    return of(fromActions.initUnAuthorized());
                }
            })
        )
    )

    signInEmail = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.signInEmail),
            map(({ payload }) => payload.credentials),
            switchMap(credentials =>
                from(this.afAuth.signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                )).pipe(
                    switchMap(signInState =>
                        this.afs.doc<User>(`users/${ signInState.user.uid }`).valueChanges().pipe(
                            take(1),
                            tap(() => this.router.navigate(['/'])),
                            map(user => fromActions.signInEmailSuccess({
                                payload: {
                                    uid: signInState.user.uid,
                                    user: user || null
                                }
                            }))
                        )
                    ),
                    catchError(err => {
                        this.notificationService.error(err.message);
                        return of(fromActions.signInEmailError({ payload: { error: err.message } }));
                    })
                )
            )
        )
    );

    signUpEmail = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.signUpEmail),
            map(({ payload }) => payload.credentials),
            switchMap((credentials) =>
                from(this.afAuth.createUserWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                )).pipe(
                    tap((credentionals) => {
                        credentionals.user.sendEmailVerification(
                            environment.firebaseConfig.actionCodeSettings
                        );
                        this.router.navigate(['/auth/email-confirm']);
                    }),
                    map(signUpState =>
                        fromActions.signUpEmailSuccess({ payload: { uid: signUpState.user.uid } })
                    ),
                    catchError(err => {
                        this.notificationService.error(err.message);
                        return of(fromActions.signUpEmailError({ payload: { error: err.message } }))
                    })
                )
            )
        )
    );

    signOut = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.signOut),
            switchMap(() =>
                from(this.afAuth.signOut()).pipe(
                    map(() => fromActions.signOutSuccess()),
                    catchError(err => of(fromActions.signOutError(
                        { payload: { error: err.message } }
                    )))
                )
            )
        )
    );

    create = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.create),
            map(({payload}) => payload.user),
            withLatestFrom(this.afAuth.authState.pipe(take(1))),
            map(([user, state]) => ({
                ...user,
                uid: state.uid,
                email: state.email,
                // created: firestore.FieldValue.serverTimestamp()
            })),
            switchMap((user: User) =>
                from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
                    tap(() => this.router.navigate(['/profile', user.uid])),
                    map(() => fromActions.createSuccess({ payload: { user } })),
                    catchError(err => of(fromActions.createError({ payload: { error: err }})))
                )
            )
            // fetch uid  of current user
            // fetch User document record by uid
            // merge record with UserRequest
            // fetch firebase record
            // update firebase record
            // dispatch success or error action
        )
    );

    update = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.update),
            switchMap(({ payload }) =>
                from(this.afs.collection('users').doc(`${payload.user.uid}`).set(payload.user)).pipe(
                    tap(() => this.router.navigate(['/profile', payload.user.uid])),
                    map(() => fromActions.updateSuccess({ payload: { user: payload.user } })),
                    catchError(err => of(fromActions.updateError({ payload: { error: err } })))
                )
            )
        )
    );



}
