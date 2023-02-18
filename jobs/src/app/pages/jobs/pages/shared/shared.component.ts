import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

    form: FormGroup;
    isInline: boolean;

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            input: [null, {
                updateOn : 'blur',
                validators: [
                    Validators.required
                ]
            }]
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
