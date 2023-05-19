import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from "./pipe-documentation/pipe-documentation.component";
import { PipesRoutingModule } from "./pipes-routing.module";

@NgModule({
  declarations: [
    PipeDocumentationComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
