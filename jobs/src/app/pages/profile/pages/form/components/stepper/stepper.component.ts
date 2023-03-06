import {Component} from '@angular/core';
import {Step, StepperService} from "@app/pages/profile/pages/form/components/stepper/services";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],

})
export class StepperComponent {

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

    isActive(index: number): boolean {
        return index === this.activeStep.index;
    }

    isCompleted(index: number): boolean {
        return index < this.activeStep.index;
    }

    isFirst(index: number): boolean {
        return this.activeStep.index === 0;
    }

    isLast(): boolean {
        return this.activeStep.index === this.steps.length - 1;
    }

}
