import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {D} from "@angular/cdk/keycodes";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

export type Value = number;

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: DateComponent,
        multi: true
    }]
})
export class DateComponent implements OnInit, ControlValueAccessor {

    @Input() placeholder: string;

    @Input() min: Date;

    @Input() max: Date;

    @Output() changed = new EventEmitter<Value>();
    @Output() closed = new EventEmitter<void>();

    value: Value;
    isDisabled: boolean;


    constructor() {
    }

    get inputValue(): Date {
        return this.value ? new Date(this.value) : null;
    }

    ngOnInit() {

    }

    private propagateChange: any = () => {
    };
    private propagateTouched: any = () => {
    };

    writeValue(value: Value) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    onChanged(event: MatDatepickerInputEvent<Date>): void {
        const value = event.value ? event.value.getTime() : null;
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onClosed(): void {
        this.propagateTouched();
        this.closed.emit();
    }

}
