import { Route } from "@angular/router";
import { PipeDocumentationComponent } from "./pipe-documentation/pipe-documentation.component";

export const PIPES_ROUTES: Route[] = [
  {
    path: '',
    component: PipeDocumentationComponent
  }
];
