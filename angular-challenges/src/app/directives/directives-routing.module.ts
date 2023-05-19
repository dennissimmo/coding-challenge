import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DIRECTIVES_ROUTES } from "./directives.routes";

@NgModule({
  imports: [RouterModule.forChild(DIRECTIVES_ROUTES)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {}
