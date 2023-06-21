import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { TruncatePipe } from './truncatePipe/truncate.pipe';
import { CreditCardPipe } from './creditCardPipe/credit-card.pipe';
import { SharedModule } from '../shared/shared.module';
import { FlattenPipe } from './flattenPipe/flatten.pipe';
import { FilterTermPipe } from './filterTerm/filter-term.pipe';

@NgModule({
    declarations: [
        PipeDocumentationComponent,
        TruncatePipe,
        CreditCardPipe,
        FlattenPipe,
        FilterTermPipe,
    ],
    exports: [TruncatePipe, FilterTermPipe],
    imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
