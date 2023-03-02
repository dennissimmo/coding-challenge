import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as fromActions from "./user.actions";
import {signUpEmail} from "./user.actions";
import {Router} from "@angular/router";
import {NotificationService} from "@app/services";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {catchError, map, switchMap, take, tap} from "rxjs/operators";
import {from, of} from "rxjs";
import {environment} from "@env/environment";
import { User } from "@app/models/backend";


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

}
