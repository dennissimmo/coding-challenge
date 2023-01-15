import {Component, Output, EventEmitter, QueryList, AfterContentInit, ContentChildren} from '@angular/core';

import { AuthRememberComponent } from "./auth-remember.component";

import { User } from './auth-form.interface';

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
        <div *ngIf="showMessage">You will be logged in for 30 days</div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit {

  @ContentChildren(AuthRememberComponent) rememberComponents: QueryList<AuthRememberComponent>;

  showMessage: boolean;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit(): void {
    console.log(this.rememberComponents);
    if (this.rememberComponents) {
      this.rememberComponents.changes.subscribe((changes) => {
        console.log(changes);
      })
    }
    // if (this.rememberComponent) {
    //   this.rememberComponent.checked.subscribe((checked: boolean) => {
    //     this.showMessage = checked;
    //   });
    // }
  }

}
