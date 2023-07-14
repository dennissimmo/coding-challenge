import { FormGroup } from '@angular/forms';

export interface IFormDirty {
    form: FormGroup;
}

export const formDirtyGuard = (component: IFormDirty) => {
    const isDirty = component.form.dirty;
    if (isDirty) {
        return confirm(
            'Do you want to navigate to another page, you have unsaved changes?'
        );
    } else {
        return true;
    }
};
