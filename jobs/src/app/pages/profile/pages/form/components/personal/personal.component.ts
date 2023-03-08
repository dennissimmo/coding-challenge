import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from "@app/pages/profile/pages/form/components/stepper/services";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnDestroy {

    private destroy = new Subject<void>();

    constructor(
        private stepper: StepperService
    ) {

    }

    ngOnInit() {
        this.stepper.check$.pipe(
            takeUntil(this.destroy)
        ).subscribe((type) => {
            // type === 'next'
            this.stepper[type].next(true);
        });
    }

    ngOnDestroy() {

    }
}
