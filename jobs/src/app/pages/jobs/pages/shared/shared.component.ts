import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {markFormGroupTouched, regex, regexErrors} from "@app/shared";
import {ControlItem} from "@app/models/frontend";
import {NotificationService} from "@app/services";

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

    form: FormGroup;
    isInline: boolean;
    regexErrors = regexErrors;
    items: ControlItem[];
    disabled: boolean;
    showSpinner: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private notificationService: NotificationService
    ) {
        this.isInline = true;
        this.items = [
            {
                value: 0,
                label: 'React',
            },
            {
                value: 1,
                label: 'Angular',
            },
            {
                value: 2,
                label: 'Vue',
            },
        ];
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            input: [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(regex.email)
                ]
            }],
            password: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            select: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            autocomplete: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            checkboxes: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            radios: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            date: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            dateRange: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
        });
    }

    onPatchValue(): void {
        this.form.patchValue({
            input: '123',
            password: 'qwerty',
            autocomplete: 1,
            select: 2,
            checkboxes: [1],
            radios: 2,
            date: new Date().getTime(),
            dateRange: {
                from: new Date(1, 2, 2022),
                to: new Date(2, 4, 2022)
            }
        });
    }

    onSubmit() {
        // If the control is untouched, form-field will not add error modifier
        console.log('Submit');
        if (!this.form.valid) {
            markFormGroupTouched(this.form);
        }
    }

    onToggleInline() {
        this.isInline = !this.isInline;
        console.log(this.form);

    }

    onToggleDisable() {
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    onToggleSpinner() {
        this.showSpinner = !this.showSpinner;
    }

    onError() {
        this.notificationService.error('This is an error!');
    }

    onSuccess() {
        this.notificationService.success('Everything is fine!');
    }
}
