import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, FormFieldModule, InputModule, PasswordModule} from "@app/shared";
import {SpinnerModule} from "@app/shared/indicators/spinner/spinner.module";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        SpinnerModule,
        FormFieldModule,
        InputModule,
        PasswordModule,
        LoginRoutingModule
    ]
})
export class LoginModule {
}
