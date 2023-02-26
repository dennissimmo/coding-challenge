import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Module from "module";
import {NotificationService} from "@app/services/notification/notification.service";
import { NotificationComponent } from './components/notification/notification.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
    declarations: [
    NotificationComponent
  ],
    imports: [
        CommonModule,
        MatSnackBarModule
    ]
})
export class NotificationModule {
    static forRoot(): ModuleWithProviders<NotificationModule> {
        return {
            ngModule: NotificationModule,
            providers: [
                NotificationService
            ]
        }
    }
}
