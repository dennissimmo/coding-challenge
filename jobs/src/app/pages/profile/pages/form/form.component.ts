import {Component, OnDestroy, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {StepperService} from "@app/pages/profile/pages/form/components/stepper/services";
import {Observable, Subject, takeUntil} from "rxjs";
import * as fromRoot from "@app/store";
import * as fromDictionaries from "@app/store/dictionaries";
import {Store} from "@ngrx/store";
import {PersonalForm} from "@app/pages/profile/pages/form/components/personal/personal.component";
import {ProfessionalForm} from "@app/pages/profile/pages/form/components/professional/professional.component";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {

    dictionaries$: Observable<fromDictionaries.Dictionaries>;
    dictionariesIsReady$: Observable<boolean>;

    private destroy = new Subject<void>();

    constructor(
        public stepper: StepperService,
        private store: Store<fromRoot.State>
    ) {

    }

    ngOnInit(): void {

        this.dictionaries$ = this.store.select(fromDictionaries.getDictionaries);
        this.dictionariesIsReady$ = this.store.select(fromDictionaries.isReady);

        this.stepper.init([
            {
                key: 'professional', label: 'Professional',
            },
            {
                key: 'personal', label: 'Personal',
            },
        ]);

        this.stepper.complete$.pipe(
            takeUntil(this.destroy)
        ).subscribe(() => {
            console.log('completed');
        });

        this.stepper.cancel$.pipe(
            takeUntil(this.destroy)
        ).subscribe(() => {
            console.log('canceled');
        });
    }

    ngOnDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }

    onPersonalChanged(personalForm: PersonalForm) {

    }

    onProfessionalChanged(professionalForm: ProfessionalForm) {

    }
}
