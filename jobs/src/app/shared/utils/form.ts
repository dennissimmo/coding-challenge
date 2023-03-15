import {FormControl, FormGroup} from "@angular/forms";
import { ControlItem } from "@app/models/frontend";

export const markFormGroupTouched = (formGroup: FormGroup) => {
    Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control instanceof FormGroup) {
            markFormGroupTouched(control);
        }
    });
}

export interface Control {
    items?: ControlItem[];
    changed?: () => void;
    map?: () => void;
}

export interface ControlEntities {
    [key: string]: Control;
}

export const mapControls = (controls: ControlEntities): void => {
    Object.keys(controls).forEach(key => {
        if (controls[key].map) {
            controls[key].map();
        }
    });
}
