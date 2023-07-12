import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {
    FaConfig,
    FaIconLibrary,
    FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        ToolbarComponent,
        TopPageComponent,
        AccordionComponent,
        ProgressBarComponent,
        StarRatingsComponent,
        AppComponent,
        LoaderComponent,
        CreditCardInputComponent,
        TwitterPostComponent,
        LinkedinPostComponent,
        QuoteComponent,
        ToggleComponent,
        RichTextViewerComponent,
        DebounceSearchComponent,
        SearchListComponent,
        CounterComponent,
        SimpleTableComponent,
        PaginationComponent,
        TabsComponent,
        OtherDocumentationComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        PipesModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private library: FaIconLibrary, private config: FaConfig) {
        library.addIconPacks(fas, far, fab);
        config.fixedWidth = true;
    }
}
