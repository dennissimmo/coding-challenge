import {Component, OnDestroy, OnInit} from '@angular/core';
import {Step, StepperService} from "@app/pages/profile/pages/form/components/stepper/services";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, OnDestroy {

    private destroy$ = new Subject<void>();

    constructor(
        private stepper: StepperService
    ) {
    }

    get steps(): Step[] {
        return this.stepper.steps;
    }

    get activeStep() {
        return this.stepper.activeStep;
    }

    ngOnInit() {
        this.stepper.next$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => {
           this.stepper.onNext();
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    isActive(index: number): boolean {
        return index === this.activeStep.index;
    }

    isCompleted(index: number): boolean {
        return index < this.activeStep.index;
    }

    isFirst(): boolean {
        return this.activeStep.index === 0;
    }

    isLast(): boolean {
        return this.activeStep.index === this.steps.length - 1;
    }

    selectStep(index: number): void {
        this.stepper.activeStep = {...this.steps[index], index: index};
    }

    onNext(): void {
        this.stepper.check.next('next');
    }

    onComplete(): void {
        this.stepper.check.next('complete');
    }

    onCancel(): void {
        this.stepper.cancel.next();
    }

    onPrev(): void {
        this.stepper.onPrev();
    }
}
