import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { AuthFormComponent } from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';
import {ViewContainerRef_} from "@angular/core/src/linker/view_container_ref";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container [ngOutletContext]="ctx" [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl let-city let-location="location">
        {{ city + ' : ' + location }}
      </template>
    </div>
  `
})
export class AppComponent {

  ctx = {
    $implicit: 'English',
    location: 'UK'
  }

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
  ) {
  }

}