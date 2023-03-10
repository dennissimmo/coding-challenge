import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {FormComponent} from './form.component';
import {StepperModule} from "@app/pages/profile/pages/form/components";
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';


@NgModule({
    declarations: [
        FormComponent,
        PersonalComponent,
        ProfessionalComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        StepperModule
    ]
})
export class FormModule {
}
