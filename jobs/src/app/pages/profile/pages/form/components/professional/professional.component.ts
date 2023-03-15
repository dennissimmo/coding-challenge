import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {StepperService} from "@app/pages/profile/pages/form/components/stepper/services";
import {Subject, takeUntil} from "rxjs";
import {Dictionaries} from "@app/store/dictionaries";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {markFormGroupTouched, regexErrors} from "@app/shared";
import {
    RecruiterForm
} from "@app/pages/profile/pages/form/components/professional/roles/recruiter/recruiter.component";
import { EmployeeForm } from "@app/pages/profile/pages/form/components/professional/roles/employee/employee.component";

export interface ProfessionalForm {
    about: string;
    roleId: string;
    role: RecruiterForm | EmployeeForm;
}

@Component({
    selector: 'app-professional',
    templateUrl: './professional.component.html',
    styleUrls: ['./professional.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit, OnDestroy {

    @Input() value: ProfessionalForm;
    @Input() dictionaries: Dictionaries;

    @Output() changed = new EventEmitter<ProfessionalForm>();

    form: FormGroup;
    regexErrors = regexErrors;

    private destroy = new Subject<void>();

    constructor(
        private stepper: StepperService,
        private fb: FormBuilder,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            roleId: [null, { updateOn: 'change', validators: [Validators.required] } ],
            about: [null, { updateOn: 'blur'} ],
        });

        if (this.value) {
            this.form.patchValue(this.value);
        }

        this.stepper.check$.pipe(
            takeUntil(this.destroy)
        ).subscribe((type) => {
            if (!this.form.valid) {
                markFormGroupTouched(this.form);
                this.form.updateValueAndValidity();
                this.changeDetector.detectChanges();
            } else {
                this.changed.emit(this.form.value);
            }

            // type === 'complete'
            this.stepper[type].next(this.form.valid);
        })
    }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

}
