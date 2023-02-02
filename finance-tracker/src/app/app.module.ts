import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListContainerComponent } from './category-list-container/category-list-container.component';
import { CategoryListPresenterComponent } from './category-list-presenter/category-list-presenter.component';
import {MatListModule} from "@angular/material/list";
import { reducers} from "./state/reducer";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListContainerComponent,
    CategoryListPresenterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
