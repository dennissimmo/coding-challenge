import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {logsReducer} from "./state/reducer";
import {EffectsModule} from "@ngrx/effects";
import {LogsEffects} from "./state/effects";
import {LogsListPresenterComponent} from './logs-list-presenter/logs-list-presenter.component';
import {LogsListContainerComponent} from './logs-list-container/logs-list-container.component';
import {RouterModule, Routes} from "@angular/router";
import {MatListModule} from "@angular/material/list";

const routes: Routes = [
  {
    path: '',
    component: LogsListContainerComponent
  }
];

@NgModule({
  declarations: [
    LogsListPresenterComponent,
    LogsListContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("logsFeature", logsReducer),
    EffectsModule.forFeature([LogsEffects]),
    RouterModule.forChild(routes),
    MatListModule
  ],
  exports: [
    RouterModule
  ]
})
export class LogsModule { }
