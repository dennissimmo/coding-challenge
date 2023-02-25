import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateComponent} from './date.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
    declarations: [
        DateComponent
    ],
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatFormFieldModule
    ],
    exports: [
        DateComponent
    ]
})
export class DateModule {
}
