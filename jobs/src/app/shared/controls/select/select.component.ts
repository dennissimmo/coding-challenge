import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {ControlItem, Value} from "@app/models/frontend";
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SelectComponent,
            multi: true
        }
    ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

    @Input() items: ControlItem[];
    @Input() placeholder: string;
    @Output() changed = new EventEmitter<Value>();

    value: Value;
    isDisabled: boolean;

    constructor() {
    }

    ngOnInit() {

    }

    private propagateChange: any = () => {
    };
    private propagateTouched: any = () => {
    };

    writeValue(value: Value): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    onChange($event: MatOptionSelectionChange<string | number | boolean>) {
        const value = $event.source.value ? $event.source.value : null;
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    onBlur(): void {

    }
}
