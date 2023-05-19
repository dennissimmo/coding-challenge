import { Route } from "@angular/router";
import {
  ComponentDocumentationComponent
} from "./components/component-documentation/component-documentation.component";
import {
  DirectiveDocumentationComponent
} from "./directives/directive-documentation/directive-documentation.component";
import { PipeDocumentationComponent } from "./pipes/pipe-documentation/pipe-documentation.component";
import { ServiceDocumentationComponent } from "./services/service-documentation/service-documentation.component";
import { CardComponent } from "./components/card/card.component";

export const routes: Route[] = [
  {
    path: '',
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
