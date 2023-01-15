import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import {AuthFormComponent} from "./auth-form/auth-form.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AuthFormModule
    ],
    entryComponents: [
        AuthFormComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
