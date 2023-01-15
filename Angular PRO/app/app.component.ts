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
      <div #entry></div>
      <template #tmpl let-city let-location="location">
        {{ city + ' : ' + location }}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
  ) {
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(
        this.tmpl,
        {
          $implicit: 'London',
          location: 'UK'
        }
    );
  }

}