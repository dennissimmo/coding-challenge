import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobComponent} from "@app/pages/jobs/job.component";

const routes: Routes = [
    {
        path: '',
        component: JobComponent,
        children: [
            {
                path: 'shared',
                loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
            },
            {
                path: 'styles',
                loadChildren: () => import('./pages/styles/styles.module').then(m => m.StylesModule)
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
