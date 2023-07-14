import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegex } from './email.regex';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
    form: FormGroup = this.fb.group({
        name: [
            null,
            {
                updateOn: 'blur',
                validators: [Validators.required],
            },
        ],
        email: [null, [Validators.pattern(emailRegex), Validators.required]],
        message: null,
    });

    constructor(private fb: FormBuilder) {}

    onSubmit() {
        console.log(this.form);
    }

    hasError(control: string, error: string): boolean | undefined {
        return (
            this.form.get(control)?.hasError(error) &&
            this.form.get(control)?.touched
        );
    }
}
