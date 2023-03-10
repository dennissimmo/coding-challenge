import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlItem, Value} from "@app/models/frontend";

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CheckboxesComponent,
            multi: true
        }
    ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {

    @Input() items: ControlItem[];
    @Output() changed = new EventEmitter<Value[]>();

    value: Value[];
    isDisabled: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    private propagateChange: any = () => {};

    writeValue(value: Value[]) {
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

    onChanged(value: Value, checked: boolean): void {
        const selected = this.getSelected(value, checked);

        this.value = selected;
        this.propagateChange(selected);
        this.changed.emit(selected);
    }

    private getSelected(value: Value, checked: boolean): Value[] {
        const selected = this.value ? [...this.value] : [];

        if (checked) {
            if (!selected.includes(value)) {
                selected.push(value);
            }
        } else {
            const index = this.value.indexOf(value);
            // mutable array change
            selected.splice(index, 1);
        }

        return selected.length ? selected : null;
    }

    isChecked(value: Value): boolean {
        return this.value && this.value.includes(value);
    }

}
