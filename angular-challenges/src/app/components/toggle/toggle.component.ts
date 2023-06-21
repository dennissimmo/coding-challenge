import { Component, Input, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';

type State = 'checked' | 'non-checked';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    animations: [
        trigger('toggle', [
            state(
                'non-checked',
                style({
                    backgroundColor: 'red',
                    transform: 'translateX(0)',
                })
            ),
            state(
                'checked',
                style({
                    backgroundColor: 'green',
                    transform: 'translateX(20px)',
                })
            ),
            transition('checked <=> non-checked', animate('300ms')),
        ]),
    ],
})
export class ToggleComponent implements OnInit {
    @Input() checked: boolean;

    state: State;

    ngOnInit(): void {
        this.updateState();
    }

    updateState(): void {
        this.state = this.checked ? 'checked' : 'non-checked';
    }

    toggleState(): void {
        this.checked = !this.checked;
        this.updateState();
    }
}
