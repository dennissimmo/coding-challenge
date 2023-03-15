import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export interface ExperienceForm {
    companyName: string;
    period: Period;
}

export interface Period {
    from: number;
    to: number;
}

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

    @Input() parent: FormGroup;
    @Input() name: string;

    @Input() values: ExperienceForm[];

    form: FormArray;

    constructor(
        private fb: FormBuilder
    ) {

    }

    ngOnInit(): void {
        this.values = this.values ? this.values : [];
        this.init();
    }

    ngOnDestroy(): void {
    }

    private init(): void {
        this.form = this.fb.array(
            this.getFormGroupArray(this.values)
        );
        this.parent.addControl(this.name, this.form);
    }

    private getFormGroupArray(values: ExperienceForm[]): FormGroup[] {
        if (!this.values.length) {
            return [this.getFormGroup()];
        } else {
            return values.map(form => this.getFormGroup(form));
        }
    }

    private getFormGroup(value?: ExperienceForm): FormGroup {
        const group = this.fb.group({
            companyName: this.fb.control(null, {
                updateOn: 'blur',
                validators: Validators.required
            }),
            period: new FormControl(null, { updateOn: 'change', validators: Validators.required })
        });

        if (value) {
            group.patchValue(value);
        }

        return group;
    }

    addExperience(): void {
        this.form.push(this.getFormGroup());
    }

    deleteExperience(i: number): void {
        this.form.removeAt(i);
    }

}
