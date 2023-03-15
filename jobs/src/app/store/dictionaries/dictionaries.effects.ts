import {Injectable} from "@angular/core";

import {Observable, of, pipe, zip} from "rxjs";
import { map, switchMap, catchError, take } from "rxjs/operators";

import { Dictionaries, Dictionary, Item, ControlItem } from "@app/store/dictionaries/dictionaries.models";

import * as fromActions from './dictionaries.actions';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import * as jsonCountries from "@src/assets/countries.json";
import {HttpClient} from "@angular/common/http";

export interface Country {
    name: string;
    code: string;
}

const documentToIem = (x: DocumentChangeAction<any>): Item => {
    const data = x.payload.doc.data();
    return {
        id: x.payload.doc.id,
        ...data
    };
};

const itemsToControlItem = (x: Item): ControlItem => ({
   value: x.id,
   label: x.name,
   icon: x.icon
});

const addDictionary = (items: Item[]): Dictionary => ({
    items,
    controlItems: [...items].map(item => itemsToControlItem(item))
});

@Injectable()
export class DictionariesEffects {

    constructor(
        private afs: AngularFirestore,
        private actions$: Actions,
        private httpClient: HttpClient
    ) {
    }

    read = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.readDictionary),
            switchMap((_action) => {
                return zip(
                    this.afs.collection('roles').snapshotChanges().pipe(
                        map(items => items.map(x => documentToIem(x))),
                        take(1)
                    ),
                    this.afs.collection('qualifications').snapshotChanges().pipe(
                        map(items => items.map(x => documentToIem(x))),
                        take(1)
                    ),
                    this.afs.collection('skills').snapshotChanges().pipe(
                        map(items => items.map(x => documentToIem(x))),
                        take(1)
                    ),
                    this.afs.collection('specializations').snapshotChanges().pipe(
                        map(items => items.map(x => documentToIem(x))),
                        take(1)
                    ),
                    this.httpClient.get<Country[]>('assets/countries.json').pipe(
                        map(response => {
                            return response.map(country => ({
                                id: country.code.toUpperCase(),
                                name: country.name,
                                icon: {
                                    src: null,
                                    cssClass: 'fflag fflag-' + country.code.toUpperCase()
                                }
                            }));
                        })
                    )
                ).pipe(
                    map(([roles, qualifications, skills, specializations, countries]) => {
                        const dictionaries: Dictionaries = {
                            roles: addDictionary(roles),
                            specializations: addDictionary(specializations),
                            qualifications: addDictionary(qualifications),
                            skills: addDictionary(skills),
                            countries: addDictionary(countries)
                        };
                        return fromActions.readDictionarySuccess({  payload: { dictionaries }});
                    }),
                    catchError(err => of(fromActions.readDictionaryError({ payload: { error: err.message } })))
                )
            })
        )
    );
}
