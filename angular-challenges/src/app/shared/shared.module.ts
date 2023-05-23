import { NgModule } from "@angular/core";
import { CardComponent } from "../components/card/card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CardComponent]
})
export class SharedModule {}
