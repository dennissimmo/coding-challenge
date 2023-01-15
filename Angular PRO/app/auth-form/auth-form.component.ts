import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  ViewChild, AfterViewInit
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

  @ViewChild(AuthMessageComponent) messageComponent: AuthMessageComponent;
  @ContentChild(AuthRememberComponent) rememberComponent: AuthRememberComponent;

  showMessage: boolean;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {


  }

  ngAfterContentInit(): void {
    if (this.messageComponent) {
      this.messageComponent.days = 30;
    }
    if (this.rememberComponent) {
      this.rememberComponent.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

}
