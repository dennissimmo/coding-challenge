import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from "./pipe-documentation/pipe-documentation.component";
import { PipesRoutingModule } from "./pipes-routing.module";
import { TruncatePipe } from "./truncatePipe/truncate.pipe";
import { CreditCardPipe } from './creditCardPipe/credit-card.pipe';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardPipe
  ],
  exports: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ]
})
export class PipesModule { }
