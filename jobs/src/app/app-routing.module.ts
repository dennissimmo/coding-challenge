import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: 'demo',
                loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule)
            },
            {
                path: 'static',
                loadChildren: () => import('./pages/static/static.module').then(m => m.StaticModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'static/welcome'
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'static/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
