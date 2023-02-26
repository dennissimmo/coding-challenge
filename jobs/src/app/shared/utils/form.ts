import {FormControl, FormGroup} from "@angular/forms";

export const markFormGroupTouched = (formGroup: FormGroup) => {
    Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control instanceof FormGroup) {
            markFormGroupTouched(control);
        }
    });
}
