import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListContainerComponent} from "./category-list-container/category-list-container.component";

const routes: Routes = [
  {
    path: 'categories', component: CategoryListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
