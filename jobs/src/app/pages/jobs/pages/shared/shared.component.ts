import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regex, regexErrors} from "@app/shared";
import {ControlItem} from "@app/models/frontend";

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

    constructor(
        private formBuilder: FormBuilder
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
                updateOn : 'blur',
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
        });
    }

    onPatchValue(): void {
        this.form.patchValue({ input: 'test'});
    }

    onSubmit() {
        console.log('Submit');
    }

    onToggleInline() {
        this.isInline = !this.isInline;
    }
}
