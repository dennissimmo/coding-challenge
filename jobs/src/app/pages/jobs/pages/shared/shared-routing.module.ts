import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedComponent} from "@app/pages/jobs/pages/shared/shared.component";

const routes: Routes = [
    {
        path: '',
        component: SharedComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
