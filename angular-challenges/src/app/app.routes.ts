import { Route } from "@angular/router";
import { ServiceDocumentationComponent } from "./services/service-documentation/service-documentation.component";
import {
  ComponentDocumentationComponent
} from "./components/component-documentation/component-documentation.component";

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components'
  },
  {
    path: 'components',
    component: ComponentDocumentationComponent
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'services',
    component: ServiceDocumentationComponent
  }
];
