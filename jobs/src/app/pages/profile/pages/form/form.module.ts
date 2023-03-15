import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {FormComponent} from './form.component';
import {StepperModule} from "@app/pages/profile/pages/form/components";
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import {ReactiveFormsModule} from "@angular/forms";
import {
    AutocompleteModule, CheckboxesModule,
    FilesUploadModule,
    FormFieldModule,
    InputModule, RadiosModule,
    SelectModule,
    UserPhotoModule
} from "@app/shared";
import {SpinnerModule} from "@app/shared/indicators/spinner/spinner.module";
import { EmployeeComponent } from './components/professional/roles/employee/employee.component';
import { RecruiterComponent } from './components/professional/roles/recruiter/recruiter.component';


@NgModule({
    declarations: [
        FormComponent,
        PersonalComponent,
        ProfessionalComponent,
        EmployeeComponent,
        RecruiterComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        StepperModule,
        ReactiveFormsModule,
        FormFieldModule,
        InputModule,
        AutocompleteModule,
        FilesUploadModule,
        SpinnerModule,
        UserPhotoModule,
        SelectModule,
        CheckboxesModule,
        RadiosModule
    ]
})
export class FormModule {
}
