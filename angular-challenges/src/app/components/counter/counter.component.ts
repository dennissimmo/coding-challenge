import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    @Input() min = 0;
    @Input() max = Number.MAX_SAFE_INTEGER;

    value: number;

    decrease(): void {
        if (this.value === 0 || this.value === this.min) return;

        this.value -= 1;
    }

    increase(): void {
        if (this.value >= Number.MAX_SAFE_INTEGER || this.value === this.max)
            return;

        this.value += 1;
    }
}
