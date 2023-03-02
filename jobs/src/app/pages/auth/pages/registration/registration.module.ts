import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {RegistrationComponent} from './registration.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, FormFieldModule, InputModule} from "@app/shared";
import {SpinnerModule} from "@app/shared/indicators/spinner/spinner.module";


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ButtonModule,
        SpinnerModule,
        FormFieldModule,
        InputModule,
        RegistrationRoutingModule
    ]
})
export class RegistrationModule {
}
