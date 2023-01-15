import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, Renderer
} from '@angular/core';

import { AuthRememberComponent } from "./auth-remember.component";

import { User } from './auth-form.interface';
import {AuthMessageComponent} from "./auth-message.component";

@Component({
  selector: 'auth-form',
  styles: [`
    .email {
      border-color: red;
    }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input #email type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">{{ title }}</button>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterViewInit {

  title: string = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {

    // // View Children are only available in ngAfterViewInit
    // if (this.messageComponent) {
    //   // It will throw an error (only in development) because we are mutating data,
    //   // after the view has been completed
    //   // this.messageComponent.forEach((message:AuthMessageComponent) => {
    //   //   message.days = 30;
    //   // });
    //   // We can fix it with setTimeout() or .detectChanges() method of ChangeDetector
    // }
  }

}
