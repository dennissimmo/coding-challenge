import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "@env/environment";
import {HeaderComponent} from './components/header/header.component';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule} from "@angular/material/core";
import {NotificationModule} from "@app/services";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {effects, reducers} from "@app/store";
import {HttpClientModule} from "@angular/common/http";

const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
    },
    display: {
        dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig.config),
        StoreModule.forRoot(
            reducers,
            {
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true
                }
            }
        ),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !environment.production}),
        MatNativeDateModule,
        NotificationModule.forRoot()
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
