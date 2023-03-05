import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {SharedComponent} from './shared.component';
import {ButtonsModule, ControlsModule, IndicatorsModule, PopupsModule} from "@app/shared";
import {ReactiveFormsModule} from "@angular/forms";
import {FilesUploadModule} from "@app/shared/popups/files-upload/files-upload.module";


@NgModule({
    declarations: [
        SharedComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        ReactiveFormsModule,
        ButtonsModule,
        ControlsModule,
        IndicatorsModule,
        PopupsModule
    ]
})
export class SharedModule {
}
