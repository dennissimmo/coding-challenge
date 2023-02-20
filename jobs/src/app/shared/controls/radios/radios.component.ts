import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";
import {ControlItem, Value} from "@app/models/frontend";

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit, ControlValueAccessor{

    @Input() items: ControlItem[];
    @Output() changed = new EventEmitter<Value>();

    value: Value;
    isDisabled: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    private propagateChange: any = () => {};

    writeValue(value: Value) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    onChanged(value: Value): void {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }

    isChecked(value: Value): boolean {
        return this.value === value;
    }

}
