import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from "./directives-routing.module";
import { DebounceDirective } from './debounce/debounce.directive';
import { DirectiveDocumentationComponent } from "./directive-documentation/directive-documentation.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ]
})
export class DirectivesModule { }
