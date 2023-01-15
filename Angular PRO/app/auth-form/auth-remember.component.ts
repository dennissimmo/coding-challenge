import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'auth-remember',
    template: `
        <label for="">
            <input type="checkbox" name="" id="" (change)="onChecked($event.target.checked)">
            Keep me logged in
        </label>
    `
})
export class AuthRememberComponent {

    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean): void {
        this.checked.emit(value);
    }
}