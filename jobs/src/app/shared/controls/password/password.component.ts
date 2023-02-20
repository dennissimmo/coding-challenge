import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export type PasswordType = 'password' | 'text'

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: PasswordComponent,
        multi: true
    }]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

    value: string;
    isDisabled: boolean;
    passwordType: PasswordType;

    @Input() placeholder: string;
    @Output() changed = new EventEmitter<string>;

    constructor() {
        this.passwordType = 'password';
    }

    ngOnInit() {

    }

    private propagateChange: any = () => {
    };
    private propagateTouched: any = () => {
    };


    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    writeValue(value: string): void {
        this.value = value;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onKeyUp(value: string):void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onBlur(): void {
        this.propagateTouched();
    }

    togglePassword(): void {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }
}
