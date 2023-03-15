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
import {markFormGroupTouched, regex, regexErrors} from "@app/shared";

export interface PersonalForm {
    name: string;
    photoUrl: string;
    country: string;
}

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalComponent implements OnInit, OnDestroy {

    @Input() value: PersonalForm;

    @Input() dictionaries: Dictionaries;

    @Output() changed = new EventEmitter<PersonalForm>();

    form: FormGroup;
    regexErrors = regexErrors;


    private destroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private changeDetector: ChangeDetectorRef,
        private stepper: StepperService
    ) {

    }

    ngOnInit(): void {
        this.form = this.fb.group({
            photoUrl: [null],
            name: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.latinAndNumbers)
                ]
            }],
            country: [null, {
                updateOn: 'change', validators: [Validators.required]
            }]
        });

        if (this.value) {
            this.form.patchValue(this.value);
        }

        this.stepper.check$.pipe(
            takeUntil(this.destroy)
        ).subscribe((type) => {
            // type === 'next'

            if (!this.form.valid) {
                markFormGroupTouched(this.form);
                this.form.updateValueAndValidity();
                this.changeDetector.detectChanges();
            } else {
                this.changed.emit(this.form.value);
            }

            this.stepper[type].next(this.form.valid);
        });
    }

    ngOnDestroy(): void {

    }

    onPhotoChanged(photo: string | string[]) {
        if (photo) {
            this.form.controls.photoUrl.setValue(photo);
        }
    }
}
