import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  ViewChild, AfterViewInit, ViewChildren, QueryList
} from '@angular/core';

import { AuthRememberComponent } from "./auth-remember.component";

import { User } from './auth-form.interface';
import {AuthMessageComponent} from "./auth-message.component";

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message #message [style.display]="(showMessage ? 'inherit' : 'none')">
          
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @ViewChildren(AuthMessageComponent) messageComponent: QueryList<AuthMessageComponent>;
  @ContentChild(AuthRememberComponent) rememberComponent: AuthRememberComponent;

  showMessage: boolean;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    // View Children are only available in ngAfterViewInit
    if (this.messageComponent) {
      // It will throw an error (only in development) because we are mutating data,
      // after the view has been completed
      this.messageComponent.forEach((message:AuthMessageComponent) => {
        message.days = 30;
      });
      // We can fix it with setTimeout() or .detectChanges() method of ChangeDetector
    }
  }

  ngAfterContentInit(): void {
    if (this.rememberComponent) {
      this.rememberComponent.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

}
