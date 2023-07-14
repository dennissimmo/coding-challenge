import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ToggleValue {
    label: string;
    value: string;
    isSelected?: boolean;
}

@Component({
    selector: 'app-toggle-group',
    templateUrl: './toggle-group.component.html',
    styleUrls: ['./toggle-group.component.scss'],
})
export class ToggleGroupComponent {
    @Input() toggleList: ToggleValue[];

    @Output() valueChanged: EventEmitter<ToggleValue> =
        new EventEmitter<ToggleValue>();

    toggleButton(selectedBtn: ToggleValue) {
        this.toggleList.forEach(
            (btn) => (btn.isSelected = selectedBtn.value === btn.value)
        );
        this.valueChanged.emit(selectedBtn);
    }
}
